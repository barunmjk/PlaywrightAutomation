import {test,expect} from '@playwright/test';


test('Orange dropdown',async({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.fill('[name="username"]','Admin');
await page.fill('[name="password"]','admin123');
await page.click('//button[@type="submit"]');
await page.click('//a[@href="/web/index.php/pim/viewPimModule"]');
await page.click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[6]/div/div[2]/div/div/div[2]/i');
await page.waitForSelector('//div[@role="listbox"]//span');

const options = await page.$$('//div[@role="listbox"]//span');
   for(let option of options){
   
    const text = await option.textContent();
    console.log(text);

    if(text.includes('QA Lead'))
       await  option.click();
    break;
   }
});