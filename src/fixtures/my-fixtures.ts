import { test as base } from '@playwright/test';
import { LoginPage } from '../pom/login.page';
import { ProductPage } from '../pom/product.page';

type MyFixture = {
    loginPage: LoginPage;
    productPage: ProductPage
};

export const test = base.extend<MyFixture>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    productPage: async ({ page }, use) => {
        const productPage = new ProductPage(page);
        await use(productPage)


    }

    
});

export { expect } from '@playwright/test';