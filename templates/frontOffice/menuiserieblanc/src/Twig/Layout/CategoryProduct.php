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

#[AsTwigComponent(template: 'components/Layout/CategoryProduct/CategoryProduct.html.twig')]
class CategoryProduct
{
    private DataAccessService $dataAccessService;
    public string $categoryId;
    public string $page;

    #[ExposeInTemplate]
    private array $products;

    #[ExposeInTemplate]
    private array $pagination;

    const  ITEM_PER_PAGE = 15;

    public function __construct(DataAccessService $dataAccessService, private TranslatorInterface $translator)
    {
        $this->dataAccessService = $dataAccessService;
    }
    
    public function getPagination(): array
    {
        $this->pagination = [];
        $this->pagination['page'] = $this->page;
        $this->pagination['totalPages'] = ceil(count($this->dataAccessService->resources('/api/front/products', [
          'productCategories.category.id' => $this->categoryId,
        ])) / self::ITEM_PER_PAGE);
        $this->pagination['prevPage'] = $this->page > 1 ? $this->page - 1 : null;
        $this->pagination['nextPage'] = count($this->products) > self::ITEM_PER_PAGE ? $this->page + 1 : null;

        return $this->pagination;
    }

    public function getProducts(): array
    {
      
        $this->products = $this->dataAccessService->resources('/api/front/products', [
            'productCategories.category.id' => $this->categoryId,
            'itemsPerPage' => self::ITEM_PER_PAGE,
            'page' => $this->page,
        ]);
        
        $results = array_map(function ($item) {
            $productImages = $this->dataAccessService->resources('/api/front/product_images', [
                'itemsPerPage' => 1,
                'product.id' => $item["id"]
            ]);

            return [
                'title' => $item['i18ns']['title'],
                'url' => $item['publicUrl'],
                'img' => [
                    'url' =>  $productImages ? '/legacy-image-library/product_image_'.$productImages[0]['id'].'/full/%5E*!594,594/0/default.webp' : "/templates-assets/frontOffice/menuiserieblanc/dist/images/placeholder.png",
                    'alt' => $item['i18ns']['title'],
                ]
            ];
        }, $this->products);

        return $results;
    }
}
