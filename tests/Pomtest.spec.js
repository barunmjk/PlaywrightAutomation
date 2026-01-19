import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Loginpage';
import { HomePage } from '../pages/HomePage';

test.only("add to product test", async ({ page }) => {
    const login = new LoginPage(page);
    const homepage = new HomePage(page);

    await login.gotoLoginPage();
    await login.login('pavanol', 'test@123');

    await homepage.addToProduct("Iphone 6 32gb");
});
