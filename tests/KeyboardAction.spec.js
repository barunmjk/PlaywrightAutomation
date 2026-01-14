import {test,expect} from '@playwright/test'

test('KeyBoard action',async({page})=>{
   await page.goto('https://gotranscript.com/text-compare');
   await page.fill("[name='text1']","Hello playwright");
   await page.keyboard.press("Control+A");//in place of Control key we can use Meta
   await page.keyboard.press("Control+C");
   
   await page.keyboard.press("Tab");
   await page.keyboard.press("Control+V");
   await page.keyboard.press("ArrowDown");
   await page.keyboard.press("ArrowDown");
   await page.keyboard.press("ArrowDown");
   await page.keyboard.press("ArrowDown");
   await page.keyboard.press("ArrowDown");
   await page.keyboard.press("ArrowDown");
   await page.keyboard.press("ArrowDown");
   await page.keyboard.press("ArrowDown");

   await page.waitForTimeout(3000);
})