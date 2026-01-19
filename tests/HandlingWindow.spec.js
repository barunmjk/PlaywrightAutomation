import {test,expect} from '@playwright/test'

test('practice of howTOWindow',async({page})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html");
    await page.click("//a[contains(text(),'Open New Seperate')]");
       const [childpage]=await Promise.all([
         page.waitForEvent('popup'),
         page.click("//button[contains(@onclick,'newwindow()')]")
       ]);
       await childpage.keyboard.press("ArrowDown");
       await childpage.keyboard.press("ArrowDown");
       await childpage.keyboard.press("ArrowDown");
       await childpage.keyboard.press("ArrowDown");
       await childpage.keyboard.press("ArrowDown");
       await childpage.keyboard.press("ArrowDown");
       await childpage.keyboard.press("ArrowDown");
       await childpage.keyboard.press("ArrowDown");
       await childpage.click("//h4[contains(@class,'h3 mb-3 selenium-ide')]");
       await page.waitForTimeout(4000);
        await childpage.close();
        await page.bringToFront();
         
})
test.only("tab handling",async({page})=>{
  await page.goto("https://demo.automationtesting.in/Windows.html");

     const [newTab]=await Promise.all([
        page.waitForEvent('popup'),
        page.click("//button[text()='    click   ']")
     ]);
     await newTab.click("//h4[contains(@class,'h3 mb-3 selenium-ide')]");
      await page.waitForTimeout(3000);
     await newTab.close();
     await page.bringToFront();
     
})