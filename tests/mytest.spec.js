import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('narunmjk');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('Narun123');
  await page.getByRole('button', { name: 'Log in' }).click();
});