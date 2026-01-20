import {test,expect,chromium} from '@playwright/test';

test("handling window using browser context ",async()=>{
const browser= await chromium.launch();
const context =await browser.newContext();
const page1=await context.newPage();

const page2=await  context.newPage();
const allpage=await context.pages();
console.log("all pages:",allpage);

await page1.goto("https://www.zomato.com/");
await page2.goto("https://www.flipkart.com/");
await page1.waitForTimeout(3000);
await page2.waitForTimeout(3000);
})