import { data } from '../../src/fixtures/data';
import {expect, test} from '../../src/fixtures/my-fixtures';

test.describe ('AUTHENTICATION', () => {
    test ('AUTH_001 - Verify UI authetication page', async ({loginPage}) => {
        //Nagigate to the Login Page
        await loginPage.goto();
    

            //Verify username Input
        
            await expect (loginPage.usernameInput).toBeVisible();
            await expect (loginPage.usernameInput).toBeEnabled();

            //Verify password Input
            await expect (loginPage.passwordInput).toBeVisible();
            await expect (loginPage.passwordInput).toBeEnabled();

            //Verify remember me checkbox
            await expect (loginPage.rememberMe).toBeVisible();
            await expect (loginPage.rememberMe).toBeEnabled();

            //Verify login button
            await expect (loginPage.loginButton).toBeVisible();
            await expect (loginPage.loginButton).toBeEnabled();
            
            //Verify Register link
            await expect (loginPage.registerLink).toBeVisible();
            await loginPage.registerLink.click();
            await expect (loginPage.page).toHaveURL ("https://e-commerce-dev.betterbytesvn.com/wp-login.php?action=register");
           
            //Verify Lost Password link
            await loginPage.goto();
            await expect (loginPage.lostPasswordLink).toBeVisible();
            await loginPage.lostPasswordLink.click();
            await expect (loginPage.page).toHaveURL ("https://e-commerce-dev.betterbytesvn.com/wp-login.php?action=lostpassword")
           
           //Verify Go to Site link
            await loginPage.goto();
            await expect (loginPage.goToSiteLink).toBeVisible();
            await loginPage.goToSiteLink.click();
            await expect (loginPage.page).toHaveURL ("https://e-commerce-dev.betterbytesvn.com/");
            
            console.log('Username:', data.username);
            console.log('Password loaded:', data.password.length > 0);
        });

        test ('AUTH_002 - Verify loginsuccessfully' ,async ({loginPage}) => {

            await loginPage.login (data.username, data.password);
            await expect (loginPage.page).toHaveURL ('https://e-commerce-dev.betterbytesvn.com/wp-admin/');
            await expect(loginPage.page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

            await expect (loginPage.page.getByRole ('region', {name: 'At a Glance'})).toBeVisible();
            await expect (loginPage.page.getByRole ('region', {name: 'Activity'})).toBeVisible();
            await expect (loginPage.page.getByRole ('region', {name: 'WordPress Events and News'})).toBeVisible();

        });


        test ('AUTH_003 - Verify login unsuccessfully', async ({loginPage}) =>{
            //Input invalid username and password



            // Invalid username
            await loginPage.login ('invalid username', data.password);

            // Verify error message
            await expect (loginPage.loginError).toBeVisible();
            await expect (loginPage.loginError).toContainText ('Error:' + ' The username ' + 'invalid username' + ' is not registered on this site. If you are unsure of your username, try your email address instead.');
            //Verify vẫn còn owr page login
            await expect (loginPage.page).toHaveURL ('https://e-commerce-dev.betterbytesvn.com/wp-login.php');

            // Invalid password
            await loginPage.login (data.username, 'invalid password');

            // Verify error message
            await expect (loginPage.loginError).toBeVisible();
            await expect (loginPage.loginError).toContainText ('Error:' + ' The password you entered for the username ' + data.username + ' is incorrect.' + ' Lost your password?');
            //Verify vẫn còn owr page login
            await expect (loginPage.page).toHaveURL ('https://e-commerce-dev.betterbytesvn.com/wp-login.php');
            
            await expect (loginPage.lostPasswordLink).toBeVisible();
            await loginPage.lostPasswordLink.click();
            await expect (loginPage.page).toHaveURL("https://e-commerce-dev.betterbytesvn.com/wp-login.php?action=lostpassword");
            await expect (loginPage.page.locator ('//div[@class = "notice notice-info message"]')). toContainText ('Please enter your username or email address.');


        });

        test ('AUTH_004 - Verify login with empty username and password', async ({loginPage}) => {
            await loginPage.goto();
            await loginPage.loginButton.click();
            await expect (loginPage.usernameInput).toBeFocused();
            await expect (loginPage.page).toHaveURL("https://e-commerce-dev.betterbytesvn.com/wp-login.php")

        });


        
});
