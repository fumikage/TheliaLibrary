<?php

/*
 * This file is part of the Thelia package.
 * http://www.thelia.net
 *
 * (c) OpenStudio <info@thelia.net>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace FlexyBundle\Twig\Layout;

use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;
use Symfony\UX\TwigComponent\Attribute\ExposeInTemplate;
use TwigEngine\Service\DataAccess\DataAccessService;

#[AsTwigComponent(template: 'components/Layout/FiltersProduct/FiltersProduct.html.twig')]
class FiltersProduct
{
    private DataAccessService $dataAccessService;

    #[ExposeInTemplate]
    private array $filters;
    private array $filtersAvs;

    public function __construct(DataAccessService $dataAccessService, private TranslatorInterface $translator)
    {
        $this->dataAccessService = $dataAccessService;
    }
    

    public function getFilters(): array
    {
        $this->filters = $this->dataAccessService->resources('/api/front/features', [
            'itemsPerPage' => 30,
            'page' => 1,
        ]);

        $this->filtersAvs = $this->dataAccessService->resources('/api/front/feature_avs', [
            'itemsPerPage' => 30,
            'page' => 1,
        ]);
        

        return array_map(function ($item) {
            return [
                'title' => $item['i18ns']['title'],
                'content' => array_map(function($featureAvs) use ($item) {
                    return [
                        'customText' => $featureAvs['i18ns']['title'],
                        'value' => $featureAvs['id'],
                        'name' => $item['id']
                    ];
                }, array_filter($this->filtersAvs, function ($featureAvs) use ($item) {
                    return $featureAvs["feature"]["id"] == $item["id"];
                })),
            ];
       }, $this->filters);
    }
}
