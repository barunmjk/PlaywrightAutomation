import {test,expect} from '@playwright/test'

test("single file upload",async({page})=>{
  await page.goto("https://www.naukri.com/registration/createAccount?othersrcp=23531&wExp=N&utm_source=google&utm_medium=cpc&utm_campaign=Brand&gclsrc=aw.ds&gad_source=1&gad_campaignid=19863995494&gbraid=0AAAAADLp3cHy6kR-7Nui5_Tj8lLg07_fP&gclid=Cj0KCQiA1JLLBhCDARIsAAVfy7ha6Hj80XjVJVae8g-QUMT4H4xrMOIgqysnbdGrkrYTk4vO0szrBMAaAocZEALw_wcB");
  await page.keyboard.press('PageDown');
  await page.keyboard.press('PageDown');
  await page.keyboard.press('PageDown');
  await page.keyboard.press('PageDown');
  await page.keyboard.press('PageDown');
  await page.keyboard.press('PageDown');
  await page.keyboard.press('PageDown');
  await page.keyboard.press('PageDown');
  await page.locator("//p[text()='  I have work experience (excluding internships)']").click();
  
       await page.locator("//button[text()='Upload Resume']").setInputFiles("/Users/Fleek IT/Downloads/AC254P032.pdf")
  await page.waitForTimeout(3000);
})
// test("single file upload2",async({page})=>{

//     await page.goto("https://the-internet.herokuapp.com/upload");
//     await page.locator("#file-upload").setInputFiles("/Users/Fleek IT/Downloads/AC254P032.pdf");
//     await page.waitForTimeout(4000);

// })

