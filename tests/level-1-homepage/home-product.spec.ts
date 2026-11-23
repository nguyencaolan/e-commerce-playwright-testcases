import { test, expect } from "playwright/test";
import { detailPage, gotoHomePage } from '../navigation';

function randomEmail(): string {
    return `user_${Date.now()}_${Math.floor(Math.random() * 10000)}@example.com`;
}

test.describe('Test product', async () => {
    test('PRODUCT_001 - Verify product page display', async ({ page }) => {
        //Step 1: mở page
        await gotoHomePage(page);

        //step 2: Tìm sản phẩm
        const productLink = page.getByRole('link', { name: 'FullStack Automation QA với Playwright Typescript', exact: true, }).first();
        await expect(productLink).toBeVisible();

        //Step 3: Click vô sản phẩm
        await productLink.click();

        // Step 4: Kiểm tra đã vào đúng page chưa
        await detailPage(page);

        //Step 5: kiểm ra page đã mở dc chưa
        const productTitle = page.locator("//h1[@class='product_title entry-title']");
        await expect(productTitle).toBeVisible();

        // Step 6: Kiểm tra giá gốc và giá khuyến mại
        const productSummary = page.locator('.summary.entry-summary');
        await expect(productSummary.locator('p.price del')).toContainText('2.499.000');
        await expect(productSummary.locator('p.price del .woocommerce-Price-currencySymbol')).toHaveText('$');
        await expect(productSummary.locator('p.price ins')).toContainText('1.749.000');
        await expect(productSummary.locator('p.price ins .woocommerce-Price-currencySymbol')).toHaveText('$');

        //Step 7: kiểm tra khoá học
        await expect(page.locator("//div[@class = 'woocommerce-product-details__short-description']")).toBeVisible();
        
        //Step 8: kiểm tra button thêm vào giỏ hàng      
        const addToCarButton = page.locator("//button[@name = 'add-to-cart']")
        await expect(page.locator("//button[@name = 'add-to-cart']")).toBeVisible();
        await expect(page.locator("//button[@name = 'add-to-cart']")).toBeEnabled();

        //Step 9: thêm vào giỏ hàng
        await addToCarButton.click();

        // Step 11: Kiểm tra thông báo thêm giỏ hàng thành công
        await expect(page.getByText(/has been added to your cart|đã được thêm vào giỏ hàng/i)).toBeVisible();

    });

        test ('PRODUCT_002 - Verify product review display', async ({page, browser}) =>{
        // Mở page
        await gotoHomePage(page);
        // Tìm đến trang yêu cầu
        const productLink = page.getByRole ('link', {name: 'FullStack Automation QA với Playwright Typescript', exact: true}).first();
        await expect(productLink).toBeVisible();
        await productLink.click();

        //Xác định page đã dc mở thành công sau khi click 
        await detailPage(page);
        const productUrl = page.url();

        //Click tab review

        const reviewTab = page.locator('//a[@href="#tab-reviews"]');
        await expect(reviewTab).toBeVisible();
        await reviewTab.click();
        console.log ("Click vô Review Tab thành công")
       
        //Kiểm tra reviwform
        const reviewForm = page.locator ("//div[@id='review_form']");
        await expect(reviewForm).toBeVisible();
        await expect (reviewForm.locator ('//p[@class="comment-form-comment"]')).toBeVisible();
        await expect (reviewForm.getByRole ('button', {name: 'Submit', exact: true})).toBeVisible();

        // chọn 5 sao
        const fiveStar = reviewForm.locator('//a[contains(@class, "star-5")]');
        await expect(fiveStar).toBeVisible();
        await fiveStar.click();
        console.log('Đã chọn 5 sao');

        //Nhập nội dung
        const email = randomEmail();
        const reviewContent = "Khoá học chất lượng, thanks you";
        const inputName = "Rubby";  
        await reviewForm.locator('//textarea[@id = "comment"]').fill(reviewContent);
        await reviewForm.locator('//input[@id= "author"]').fill(inputName);
        await reviewForm.locator('//input[@id= "email"]').fill(email);
    
        //Click submit +  Tick check lưu thông tin
        const submitButton = reviewForm.getByRole('button', {name: 'Submit', exact: true });
        await reviewForm.locator ("//input[@id='wp-comment-cookies-consent']").check();
        await submitButton.click();
        await expect(page.locator(("//div[@id = 'comments']")).getByText(reviewContent, { exact: true })).toBeVisible({ timeout: 10000 });
        
        //refesh lại page hiện tại
        await page.reload();
        console.log ("reload Page successfully")

        //Click vào lại review tab
        await page.getByRole ('tab', {name: 'Review'}).click()

        //verify review vẫn hiển thị sau khi refresh
        await expect (page.locator ('//div[@id = "comments"]').getByText(reviewContent, {exact:true,})).toBeVisible({timeout: 10_000});

        //Mở một trình duyệt mới
        const newContext = await browser.newContext();
        const newPage = await newContext.newPage();
        try {
            // Truy cập trang sản phẩm bằng phiên mới
            await newPage.goto(productUrl);

            // Click tab Reviews
            await newPage.locator('//a[@href="#tab-reviews"]').click();

            // Verify không nhìn thấy review vừa gửi
            await expect(
                newPage.locator('#comments').getByText(reviewContent, {
                    exact: true,
                })
            ).not.toBeVisible();

        } finally {
            // Đóng phiên trình duyệt mới
            await newContext.close();
        }

       
    });


});




