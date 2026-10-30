import { expect, test } from '@playwright/test';
import { detailPage, gotoHomePage } from '../navigation';


test. describe ('Test homepage ',() => {

    test ('HOME_001 - Kiểm tra homepage hiển thị thành công ', async ({ page }) => {
    // Step 1: Truy cập trang chủ
    await gotoHomePage(page);

    //Step 2: kiểm tra trang dã tải thành công
    await expect(page).toHaveURL ("https://e-commerce-dev.betterbytesvn.com/")

    //Step 3: Kiểm tra E-commerce site testing display
    await expect(page).toHaveTitle (/E-commerce site testing/i);

    //Step 4: Kiểm tra ô search hiển thị
    await expect (page.getByPlaceholder ('Search')).toBeVisible();

    //step 5: kiểm tra Menu 
    await expect(page.getByRole('link', { name: 'Trang chủ', exact: true })).toBeVisible();
    await expect(page.getByRole('link', {name : 'Danh sách khoá học', exact: true })).toBeVisible();
    await expect(page.getByRole('link', {name : 'Blog' , exact: true })).toBeVisible();
    });

    test ('HOME_002 - Kiểm tra seach function', async ({page}) =>{
       //Step 1: Truy cập trang chủ
        await gotoHomePage(page);

        //Step 2: Nhập từ khoá tìm kiếm
        const searchInput = page.getByPlaceholder ('Search products...');
        await searchInput.fill ('ISTQB');

        //Step 3: Thực hiện tìm kiếm
        await searchInput.press('Enter');

        // Step4: Lấy tiêu đề sản phẩm
        const productTitles = page.locator('ul.products .woocommerce-loop-product__title');
        
        //Step 5: kiêmr tra KQ tiềm kiếm
        await expect (productTitles.first()).toBeVisible();
        const count = await productTitles.count();
        expect (count).toBeGreaterThan(0); // kiểm tra nếu KQ > 0 thì mới chạy TCs tiếp

        //Step 6: Kiểm tra tất cả tiêu đề có chưa ISTQB
        for (let i = 0; i < count; i++) {
            const title = await productTitles.nth(i).innerText();
            expect(title.toUpperCase()).toContain('ISTQB');

        }
        console.log(`HOME_002: Tìm thấy ${count} sản phẩm chứa ISTQB`);

    });

});