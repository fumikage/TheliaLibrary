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

namespace FlexyBundle\Twig;

use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;
use Symfony\Contracts\Translation\TranslatorInterface;
use TwigEngine\Service\DataAccess\DataAccessService;
use Symfony\UX\TwigComponent\Attribute\ExposeInTemplate;
use TheliaSmarty\Template\Plugins\Assets;

#[AsTwigComponent(template: 'components/Layout/CrossSelling/CrossSelling.html.twig')]
class CrossSelling
{
    public string $categoryId;
    private DataAccessService $dataAccessService;

    #[ExposeInTemplate]
    private array $products;

    public function __construct(DataAccessService $dataAccessService, private TranslatorInterface $translator)
    {
        $this->dataAccessService = $dataAccessService;
    }

    public function getProducts(): array
    {
        $this->products = $this->dataAccessService->resources('/api/front/products', [
            'productCategories.category.id' => $this->categoryId,
            'itemsPerPage' => 3,
        ]);

        return array_map(function ($item) {
            $productImages = $this->dataAccessService->resources('/api/front/product_images', [
                'itemsPerPage' => 1,
                'product.id' => $item["id"]
            ]);

            return [
                'title' => $item['i18ns']['title'],
                'url' => $item['publicUrl'],
                'button' => [
                    'label' => $this->translator->trans('View product'),
                    'href' => $item['publicUrl'],
                ],
                'img' => [
                    'url' => $productImages ? '/legacy-image-library/product_image_'.$productImages[0]["id"].'/full/%5E*!594,594/0/default.webp' : "/templates-assets/frontOffice/menuiserieblanc/dist/images/placeholder.png",
                    'alt' => $item['i18ns']['title'],
                ]
            ];
        }, $this->products);
    }
}
