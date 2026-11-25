import { Page } from '@playwright/test';

const BASE_URL = 'https://e-commerce-dev.betterbytesvn.com/';
const DETAIL_URL =('https://e-commerce-dev.betterbytesvn.com/product/fullstack-automation-qa-voi-playwright-typescript/')


export async function gotoHomePage (page: Page): Promise<void> {
    await page.goto(BASE_URL);
    console.log('Current URL:', page.url());
    console.log('Current Title:', await page.title());
    
    
}
export async function detailPage (page: Page): Promise<void> {
    await page.goto (DETAIL_URL);
}
