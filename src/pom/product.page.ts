import { expect, Locator, Page } from '@playwright/test';

export class ProductPage {



    readonly page: Page;
    // Product information
    readonly productName: Locator;
    readonly productsMenu: Locator;
    readonly addNewProduct: Locator;
    readonly productDescription: Locator;

    // Product panels
    readonly productData: Locator;
    readonly productShortDescription: Locator;
    readonly publish: Locator;
    readonly brands: Locator;
    readonly productCategories: Locator;
    readonly productTags: Locator;
    readonly productImage: Locator;
    readonly productGallery: Locator;

    // Panel toggles
    readonly productDataToggle: Locator;
    readonly productShortDescriptionToggle: Locator;
    readonly publichToggle: Locator;
    readonly brandsToggle: Locator;
    readonly productCategoriesToggle: Locator;
    readonly productTagsToggle: Locator;
    readonly productImageToggle: Locator;
    readonly productGalleryToggle: Locator;

    // Product type
    readonly productType: Locator;
    readonly virtual: Locator;
    readonly downloadable: Locator;

    // General tab
    readonly regularPrice: Locator;
    readonly salePrice: Locator;
    readonly taxStatus: Locator;
    readonly taxClass: Locator;

    // Inventory tab
    readonly inventoryPanel: Locator;
    readonly sku: Locator;
    readonly inventoryTab: Locator
    readonly gtin: Locator;
    readonly stockManagement: Locator;
    // Stock status
    readonly inStock: Locator;
    readonly outOfStock: Locator;
    readonly onBackorder: Locator;
    readonly soldIndividually: Locator;
    //Shiping

    readonly shippingTab: Locator;
    readonly shippingPanel: Locator;
    readonly weight: Locator;
    readonly length: Locator;
    readonly width: Locator;
    readonly height: Locator;
    readonly shippingClass: Locator;
    // Linked products
    readonly linkedProductsTab: Locator;
    readonly linkedProductsPanel: Locator;
    readonly upsells: Locator;
    readonly crossSells: Locator;
    readonly upsellsSearch: Locator;
    readonly crossSellsSearch: Locator;

    readonly selectUpsells: Locator;
    readonly upsellsOption: Locator;
    readonly upsellsSelected: Locator;
    readonly upsellsRemove: Locator;
    
    readonly selectCrossSells: Locator;
    readonly crossSellsOption: Locator;
    readonly crossSellSelected: Locator;
    readonly crossSellSRemove: Locator;
    //Attributes
    readonly attributesTab: Locator;
    readonly attributesPanel: Locator;
     

    constructor(page: Page) {
        this.page = page;

        // Product information
        this.productName = page.locator('//*[@id="title"]');
        this.productsMenu = page.locator('//*[@id="menu-posts-product"]/a/div[2]')
        this.addNewProduct = page.getByRole('main').getByRole('link', { name: 'Add new product', exact: true });
        this.productDescription = page.frameLocator('#content_ifr').locator('body');

        // Product panels
        this.productData = page.getByRole('region', { name: 'Product data', exact: true });
        this.productShortDescription = page.getByRole('region', { name: 'Product short description' });
        this.publish = page.getByRole('heading', { name: 'Publish' });
        this.brands = page.getByRole('region', { name: 'Brands' });
        this.productCategories = page.getByRole('region', { name: 'Product categories' });
        this.productTags = page.getByRole('region', { name: 'Product tags' });
        this.productImage = page.getByRole('region', { name: 'Product image' });
        this.productGallery = page.getByRole('region', { name: 'Product gallery' });

        // Panel toggles
        this.productDataToggle = this.getPanelToggle('#woocommerce-product-data');
        this.productShortDescriptionToggle = this.getPanelToggle('#postexcerpt');
        this.publichToggle = this.getPanelToggle('#submitdiv');
        this.brandsToggle = this.getPanelToggle('#product_branddiv');
        this.productCategoriesToggle = this.getPanelToggle('#product_catdiv');
        this.productTagsToggle = this.getPanelToggle('#tagsdiv-product_tag');
        this.productImageToggle = this.getPanelToggle('#postimagediv');
        this.productGalleryToggle = this.getPanelToggle('#woocommerce-product-images');

        // this.productDataToggle = page.locator("//div[@id='woocommerce-product-data']").getByRole('button', { name: 'Show or hide panel' });
        // this.productShortDescriptionToggle = page.locator('#postexcerpt').getByRole('button', { name: 'Show or hide panel' });
        // this.publichToggle = page.locator('#submitdiv').getByRole('button', { name: 'Show or hide panel' });
        // this.brandsToggle = page.locator('#product_branddiv').getByRole('button', { name: 'Show or hide panel' });
        // this.productCategoriesToggle = page.locator('#product_catdiv').getByRole('button', { name: 'Show or hide panel' });
        // this.productTagsToggle = page.locator('#tagsdiv-product_tag').getByRole('button', { name: 'Show or hide panel' });
        // this.productImageToggle = page.locator('#postimagediv').getByRole('button', { name: 'Show or hide panel' });
        // this.productGalleryToggle = page.locator('#woocommerce-product-images').getByRole('button', { name: 'Show or hide panel' });

        // Product type
        this.productType = page.locator("#product-type");
        this.virtual = page.locator('#_virtual');
        this.downloadable = page.locator('#_downloadable');

        // General tab
        this.regularPrice = page.locator('#general_product_data #_regular_price');
        this.salePrice = page.locator('#general_product_data #_sale_price');
        this.taxStatus = page.locator('#general_product_data #_tax_status');
        this.taxClass = page.locator('#general_product_data #_tax_class');

        // Inventory tab
        this.inventoryPanel = page.locator('#inventory_product_data');
        this.sku = page.locator('#inventory_product_data #_sku');
        this.inventoryTab = page.locator('#woocommerce-product-data .inventory_tab a');
        this.gtin = page.locator('#_global_unique_id');
        this.stockManagement = page.locator('#inventory_product_data #_manage_stock');
        this.inStock = page.getByLabel('In stock', { exact: true });
        this.outOfStock = page.getByLabel('Out of stock', { exact: true });
        this.onBackorder = page.getByLabel('On backorder', { exact: true });
        this.soldIndividually = page.locator('#_sold_individually');
        //Shipping
        this.shippingTab = page.locator('#woocommerce-product-data .shipping_tab a');
        this.shippingPanel = page.locator('#shipping_product_data');
        this.weight = page.locator('#shipping_product_data #_weight');
        this.length = page.locator('#shipping_product_data #product_length');
        this.width = page.locator('#shipping_product_data #product_width');
        this.height = page.locator('#shipping_product_data #product_height');
        this.shippingClass = page.locator('#shipping_product_data #product_shipping_class');


        //Linkd products
        this.linkedProductsTab = page.locator('#woocommerce-product-data .linked_product_tab a')
        this.linkedProductsPanel = page.locator('#linked_product_data')
        this.upsells = page.locator('#upsell_ids');
        this.crossSells = page.locator('#crosssell_ids');
        this.upsellsSearch = page.locator('#upsell_ids + span.select2-container input.select2-search__field');
        this.crossSellsSearch = page.locator('#crosssell_ids + span.select2-container input.select2-search__field');

        this.selectUpsells = page.locator('#select2-upsell_ids-results');

// Find product option without hardcoding product ID
this.upsellsOption = this.selectUpsells
    .getByRole('option')
    .filter({ hasText: /^\(#\d+\)$/ });

this.upsellsSelected = page
    .locator('#upsell_ids')
    .locator('xpath=following-sibling::span')
    .locator('.select2-selection__choice');

this.upsellsRemove = this.upsellsSelected.locator(
    '.select2-selection__choice__remove'
);

        this.selectCrossSells = page.locator('#select2-crosssell_ids-results');

// Find product option without hardcoding product ID
this.crossSellsOption = this.selectCrossSells
    .getByRole('option')
    .filter({ hasText: /^\(#\d+\)$/ });

this.crossSellSelected = page
    .locator('#crosssell_ids')
    .locator('xpath=following-sibling::span')
    .locator('.select2-selection__choice');

this.crossSellSRemove = this.crossSellSelected.locator(
    '.select2-selection__choice__remove'
);
        //Attributesƒ
        this.attributesTab = page.locator('.attribute_tab a');
        this.attributesPanel = page.locator('#product_attributes');





    }
    private getPanelToggle(selector: string): Locator {
        return this.page
            .locator(selector)
            .getByRole('button', { name: 'Show or hide panel' });
    }

    async goto(): Promise<void> {
        await this.page.goto('https://e-commerce-dev.betterbytesvn.com/wp-admin/post-new.php?post_type=product');
    }

    async openProducts(): Promise<void> {
        await this.productsMenu.click();
    }
    async openAddNewProduct(): Promise<void> {
        await this.addNewProduct.click();
    }
    // Reusable Expand method
    async expandPanel(toggle: Locator): Promise<void> {
        const isExpanded = await toggle.getAttribute(
            'aria-expanded'
        );

        if (isExpanded === 'false') {
            await toggle.click();
        }
    }

    // Reusable Collapse method
    async collapsePanel(toggle: Locator): Promise<void> {
        const isExpanded = await toggle.getAttribute(
            'aria-expanded'
        );

        if (isExpanded === 'true') {
            await toggle.click();

        }
    }

    // hàm chung cho check box
    async verifyCheckBox(locator: Locator): Promise<void> {
        console.log('START verifyCheckBox');

        await expect(locator).toBeVisible();
        await expect(locator).toBeEnabled();
        await expect(locator).not.toBeChecked();
        await locator.check();
        await expect(locator).toBeChecked();
        await locator.uncheck();
        await expect(locator).not.toBeChecked();

        console.log('END verifyCheckBox');


    }
}
