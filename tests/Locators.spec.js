import {test, expect} from '@playwright/test'

 test('locators',async({page}) => { 
  await  page.goto('https://demoblaze.com/index.html');
   var random= Math.random().toString(36).substring(2);
   await page.locator('id=signin2').click();
    var username='makhkhanlal'+random; 

   await page.locator('id=sign-username').fill(username);
   await page.waitForTimeout(2000); 

  var password ='makhanchor'+random;
  await page.locator('id=sign-password').fill(password);
  await page.waitForTimeout(2000);

  await page.locator("//button[@onClick='register()']").click();
 await page.waitForTimeout(2000);

await page.locator('id=login2').click();
await page.locator('id=loginusername').fill(username);
await page.waitForTimeout(2000); 

await page.locator('id=loginpassword').fill(password);
await page.waitForTimeout(2000);

await page.locator("//button[@onClick='logIn()']").click();
await page.waitForTimeout(2000);
const logOut= await page.locator('id=logout2');
   
 
await expect(logOut).toBeVisible();

  console.log('One test case pass ---congrats -------');
  console.log(username);
  console.log(password);

  await page.locator('id=logout2').click(); 
  await page.waitForTimeout(2000);
  page.close();
 }) 