import { test, expect } from '@playwright/test'
import { LoginPageVtiger } from '../pages/VtigerLoginLogout'
import { POMContacts } from '../pages/POMContacts'
test("this is contact test ", async ({ page }) => {
  await page.goto("http://49.249.28.218:8888/");
  const loginvtiger = new LoginPageVtiger(page);
  await loginvtiger.loginPage("admin", "admin");

  const contactmod = new POMContacts(page);
  await contactmod.contactInformation("jetha", "lal", "warrior", "QA", "warrior@123gmail.com", "champak", "9876543212", "112311221", "9876543210", "9876543210", "8765432190", "01123456789", "2000-01-01", "yoddha@123gmail.com");
  await contactmod.customerPortalInformation();
  
  await loginvtiger.logout();
   await page.waitForTimeout(3000);
})