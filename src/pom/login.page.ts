// Login vào page
import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly rememberMe: Locator;
    readonly loginButton: Locator;
    readonly registerLink: Locator;
    readonly lostPasswordLink: Locator;
    readonly goToSiteLink: Locator;
    readonly loginError: Locator;
    

    constructor (page: Page) {
        this.page = page;
        this.usernameInput = page.locator("//input[@id='user_login']");
        this.passwordInput = page.locator ("//input[@id='user_pass']");
        this.rememberMe = page.locator ("//input[@id='rememberme']");
        this.loginButton = page.locator ("//input[@id='wp-submit']");
        this.registerLink = page.locator("//a[@class='wp-login-register']");
        this.lostPasswordLink = page.locator ("//a[@class = 'wp-login-lost-password']")
        this.goToSiteLink = page.locator ("//p[@id= 'backtoblog']")
        this.loginError = page.locator ("//div[@id='login_error']");
        
    }

    //Navigate to the Login Page
    async goto(): Promise<void> {
        //await this.page.goto ('https://e-commerce-dev.betterbytesvn.com/wp-login.php?redirect_to=https%3A%2F%2Fe-commerce-dev.betterbytesvn.com%2Fwp-admin%2F&reauth=1');
        await this.page.goto ('https://e-commerce-dev.betterbytesvn.com/wp-login.php');
     }
     async login (username: string, password: string): Promise<void> {
        await this.goto();
        await this.usernameInput.fill (username);
        await this.passwordInput.fill (password);
        await this.loginButton.click();
    
    }
}


    

        
     


