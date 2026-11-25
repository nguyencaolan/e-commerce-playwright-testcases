import { expect, test } from '../../src/fixtures/my-fixtures';

test.describe('PRODUCT', () => {
    test('PRODUCT_001- Verify Product UI', async ({ loginPage, productPage }) => {
        //Step 1: Login succsffully
        await loginPage.login(
            process.env.TEST_USERNAME ?? '',
            process.env.TEST_PASSWORD ?? ''
        );

        //Step 2: Click Products 
        await productPage.openProducts();
        //Step 3: click Add new Product
        await productPage.openAddNewProduct();
        await expect(productPage.productName).toBeVisible();
        await expect(productPage.productName).toBeEnabled();
        await expect(productPage.productDescription).toBeVisible();
        await expect(productPage.productDescription).toBeEnabled();
        //Step 6: Verify Product data is visibled
        await expect(productPage.productData).toBeVisible();
        await expect(productPage.productData).toBeEnabled();
        //Step 6: Verify Product Short Description is visibled
        await expect(productPage.productShortDescription).toBeVisible();
        await expect(productPage.publish).toBeVisible();
        await expect(productPage.brands).toBeVisible();
        await expect(productPage.productCategories).toBeVisible();
        await expect(productPage.productTags).toBeVisible();
        await expect(productPage.productImage).toBeVisible();
        await expect(productPage.productGallery).toBeVisible();

        // Step 7: Verify Product data Collapse / Expand
        await productPage.expandPanel(productPage.productDataToggle);
        await expect(productPage.productDataToggle).toHaveAttribute('aria-expanded', 'true');
        await productPage.collapsePanel(productPage.productDataToggle);
        await expect(productPage.productDataToggle).toHaveAttribute('aria-expanded', 'false');

        // Step 8: Verify Product short description Collapse / Expand
        await productPage.expandPanel(productPage.productShortDescriptionToggle);
        await expect(productPage.productShortDescriptionToggle).toHaveAttribute('aria-expanded', 'true');
        await productPage.collapsePanel(productPage.productShortDescriptionToggle);
        await expect(productPage.productShortDescriptionToggle).toHaveAttribute('aria-expanded', 'false');

        //Verify Publish collapse / expand
        await productPage.expandPanel(productPage.publichToggle);
        await expect(productPage.publichToggle).toHaveAttribute('aria-expanded', 'true');
        await productPage.collapsePanel(productPage.publichToggle);
        await expect(productPage.publichToggle).toHaveAttribute('aria-expanded', 'false');

        //Verify Brands collapse / expand
        await productPage.expandPanel(productPage.brandsToggle);
        await expect(productPage.brandsToggle).toHaveAttribute('aria-expanded', 'true');
        await productPage.collapsePanel(productPage.brandsToggle);
        await expect(productPage.brandsToggle).toHaveAttribute('aria-expanded', 'false');

        //Verify product Categories collapse / expand
        await productPage.expandPanel(productPage.productCategoriesToggle);
        await expect(productPage.productCategoriesToggle).toHaveAttribute('aria-expanded', 'true');
        await productPage.collapsePanel(productPage.productCategoriesToggle);
        await expect(productPage.productCategoriesToggle).toHaveAttribute('aria-expanded', 'false');

        //Verify product Tags collapse / expand
        await productPage.expandPanel(productPage.productTagsToggle);
        await expect(productPage.productTagsToggle).toHaveAttribute('aria-expanded', 'true');
        await productPage.collapsePanel(productPage.productTagsToggle);
        await expect(productPage.productTagsToggle).toHaveAttribute('aria-expanded', 'false');

        //Verify product Image collapse / expand

        await productPage.expandPanel(productPage.productImageToggle);
        await expect(productPage.productImageToggle).toHaveAttribute('aria-expanded', 'true');
        await productPage.collapsePanel(productPage.productImageToggle);
        await expect(productPage.productImageToggle).toHaveAttribute('aria-expanded', 'false');

        //Verify product Gallerycollapse / expand

        await productPage.expandPanel(productPage.productGalleryToggle);
        await expect(productPage.productGalleryToggle).toHaveAttribute('aria-expanded', 'true');
        await productPage.collapsePanel(productPage.productGalleryToggle);
        await expect(productPage.productGalleryToggle).toHaveAttribute('aria-expanded', 'false');

        //product Type

        await expect(productPage.productType).toBeVisible();
        await expect(productPage.productType).toBeEnabled();
        await expect(productPage.productType.locator('option')).toHaveText([
            'Simple product',
            'Grouped product',
            'External/Affiliate product',
            'Variable product'
        ]);
        await expect(productPage.virtual).toBeVisible();
        await expect(productPage.virtual).toBeEnabled();
        await expect(productPage.virtual).not.toBeChecked();

        await expect(productPage.downloadable).toBeVisible();
        await expect(productPage.downloadable).toBeEnabled();
        await expect(productPage.downloadable).not.toBeChecked();

        // Verify Virtual checkbox
        await productPage.virtual.check();
        await expect(productPage.virtual).toBeChecked();
        await productPage.virtual.uncheck();
        await expect(productPage.virtual).not.toBeChecked();

        // Verify Downloadable checkbox
        await productPage.downloadable.check();
        await expect(productPage.downloadable).toBeChecked();
        await productPage.downloadable.uncheck();
        await expect(productPage.downloadable).not.toBeChecked();

        // Verify General fields
        // Expand Product data panel
        await productPage.expandPanel(productPage.productDataToggle);

        await expect(productPage.productDataToggle).toHaveAttribute('aria-expanded', 'true');
        await expect(productPage.regularPrice).toBeVisible();
        await expect(productPage.regularPrice).toBeEnabled();

        await expect(productPage.salePrice).toBeVisible();
        await expect(productPage.salePrice).toBeEnabled();

        await expect(productPage.taxStatus).toBeVisible();
        await expect(productPage.taxStatus).toBeEnabled();
        await expect(productPage.taxStatus).toHaveValue('taxable');

        await expect(productPage.taxStatus.locator('option')).toHaveText([
            'Taxable',
            'Shipping only',
            'None'
        ]);

        await expect(productPage.taxClass).toBeVisible();
        await expect(productPage.taxClass).toBeEnabled();
        await expect(productPage.taxStatus).toHaveValue('taxable');

        await expect(productPage.taxStatus.locator('option')).toHaveText([
            'Taxable',
            'Shipping only',
            'None'
        ]);
        await expect(productPage.inventoryTab).toBeVisible();
        await productPage.inventoryTab.click();
        await expect(productPage.sku).toBeVisible();
        await expect(productPage.sku).toBeEnabled();

        await expect(productPage.gtin).toBeVisible();
        await expect(productPage.gtin).toBeEnabled();

        await productPage.verifyCheckBox(productPage.stockManagement);

        await expect(productPage.inStock).toBeVisible();
        await expect(productPage.inStock).toBeEnabled();
        await expect(productPage.inStock).toBeChecked();

        await expect(productPage.outOfStock).toBeVisible();
        await expect(productPage.outOfStock).toBeEnabled();
        await expect(productPage.outOfStock).not.toBeChecked();

        await expect(productPage.onBackorder).toBeVisible();
        await expect(productPage.onBackorder).toBeEnabled();
        await expect(productPage.onBackorder).not.toBeChecked();

        await productPage.outOfStock.check();
        await expect(productPage.outOfStock).toBeChecked();

        await productPage.onBackorder.check();
        await expect(productPage.onBackorder).toBeChecked();

        await productPage.inStock.check();
        await expect(productPage.inStock).toBeChecked();

        await productPage.verifyCheckBox(productPage.soldIndividually);
        //Shipping
        // Click Shipping tab
        await productPage.shippingTab.click();

        // Verify Shipping panel
        await expect(productPage.shippingPanel).toBeVisible();

        // Verify Weight
        await expect(productPage.weight).toBeVisible();
        await expect(productPage.weight).toBeEnabled();

        await productPage.weight.fill('2.5');
        await expect(productPage.weight).toHaveValue('2.5');

        await productPage.weight.clear();
        await expect(productPage.weight).toHaveValue('');
        // Verify Length
        await expect(productPage.length).toBeVisible();
        await expect(productPage.length).toBeEnabled();

        await productPage.length.fill('20');
        await expect(productPage.length).toHaveValue('20');

        await productPage.length.clear();
        await expect(productPage.length).toHaveValue('');

        // Verify Width
        await expect(productPage.width).toBeVisible();
        await expect(productPage.width).toBeEnabled();

        await productPage.width.fill('10');
        await expect(productPage.width).toHaveValue('10');

        await productPage.width.clear();
        await expect(productPage.width).toHaveValue('');

        // Verify Height
        await expect(productPage.height).toBeVisible();
        await expect(productPage.height).toBeEnabled();
        await productPage.height.fill('5');
        await expect(productPage.height).toHaveValue('5');
        await productPage.height.clear();
        await expect(productPage.height).toHaveValue('');
        await expect(productPage.shippingClass).toHaveValue('-1');

        // verify Linked Products

        await productPage.linkedProductsTab.click();
        await expect(productPage.upsells).toBeVisible();
        await expect(productPage.upsells).toBeEnabled();
        await expect(productPage.crossSells).toBeVisible();
        await expect(productPage.crossSells).toBeEnabled();
        
        // Verify Upsells
        await productPage.upsellsSearch.fill('123');
        await productPage.page.waitForTimeout(2000);

console.log(
    'Upsells search input:',
    await productPage.upsellsSearch.inputValue()
);

console.log(
    'Upsells result visible:',
    await productPage.selectUpsells.isVisible()
);

console.log(
    'Upsells result HTML:',
    await productPage.selectUpsells.innerHTML()
);

        const upsellsOptions = productPage.selectUpsells.getByRole('option');

        // Wait until a dynamic product option appears
        await expect.poll(
            async () => {
                const texts = await upsellsOptions.allTextContents();
                return texts.some(text => /^\(#\d+\)$/.test(text.trim()));
            },
            { timeout: 15000 }
        ).toBe(true);

        const upsellsText = (
            await productPage.upsellsOption.innerText()
        ).trim();

        console.log('Upsells selected:', upsellsText);

        // Select Upsells

        await productPage.upsellsOption.click();
        await expect(productPage.upsellsSelected).toBeVisible();
        await expect(productPage.upsellsSelected).toContainText(upsellsText);

        // Remove Upsells
        await productPage.upsellsRemove.click();
        await expect(productPage.upsellsSelected).toBeHidden();

        // Verify Cross-sells


        // Verify Cross-sells
        await productPage.crossSellsSearch.fill('123');
        await productPage.page.waitForTimeout(2000);

console.log(
    'Cross-sells search input:',
    await productPage.crossSellsSearch.inputValue()
);

console.log(
    'Cross-sells result visible:',
    await productPage.selectCrossSells.isVisible()
);

console.log(
    'Cross-sells result HTML:',
    await productPage.selectCrossSells.innerHTML()
);

        const crossSellsOptions = productPage.selectCrossSells.getByRole('option');

        // Wait until a dynamic product option appears
        await expect.poll(
            async () => {
                const texts = await crossSellsOptions.allTextContents();
                return texts.some(text => /^\(#\d+\)$/.test(text.trim()));
            },
            { timeout: 15000 }
        ).toBe(true);

        const crossSellsText = (
            await productPage.crossSellsOption.innerText()
        ).trim();

        console.log('Cross-sells selected:', crossSellsText);

        // Select Cross-sells
        await productPage.crossSellsOption.click();

        await expect(productPage.crossSellSelected).toBeVisible();
        await expect(productPage.crossSellSelected).toContainText(crossSellsText);

        // Remove Cross-sells
        await productPage.crossSellSRemove.click();

        await expect(productPage.crossSellSelected).toBeHidden();


        // Verify Attributes
        await productPage.attributesTab.click();
        await expect(productPage.attributesPanel).toBeVisible();



    });
});


