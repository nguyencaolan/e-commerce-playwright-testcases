import { test as base } from '@playwright/test';
import { LoginPage } from '../pom/login.page';

type MyFixture = {
    loginPage: LoginPage;
};

export const test = base.extend<MyFixture>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
});

export { expect } from '@playwright/test';