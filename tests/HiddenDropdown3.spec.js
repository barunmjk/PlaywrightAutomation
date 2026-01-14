import {test,expect} from '@playwright/test';

test('Practice 3 ',async({page}) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.fill('[name="username"]','Admin');
await page.fill('[name="password"]','admin123');
await page.click('button[type="submit"]');

await page.click('//span[text()="PIM"]');
await page.click('//label[text()="Employment Status"]/../..//div[text()="-- Select --"]');
await page.waitForSelector('//div[@role="listbox"]//span');

const options =await page.$$('//div[@role="listbox"]//span');
 for(let option of options){
   const textopt= await option.textContent();
   if( textopt.includes('Freelance')){
    await option.click();
      break;
   }
   console.log(textopt);
 }
});