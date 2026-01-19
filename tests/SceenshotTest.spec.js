import {test,expect} from '@playwright/test'

// test("page sceenshot",async({page})=>{
//  await page.goto("https://www.facebook.com/");
//  await page.screenshot({path:'/Users/Fleek IT/PlaywrightAutomation/tests/screenshots/'+Date.now()+'+ss.png'});
//  await page.waitForTimeout(3000);
// })
// test("page sceenshot",async({page})=>{
//  await page.goto("https://www.facebook.com/");
//  await page.screenshot({path:'/Users/Fleek IT/PlaywrightAutomation/tests/screenshots/'+Date.now()+'+fullpage.png',fullPage:true});
//  await page.waitForTimeout(3000);
// })

test("",async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html");
    await page.locator("img[src='imgs/galaxy_s6.jpg']").screenshot({path:'/Users/Fleek IT/PlaywrightAutomation/tests/screenshots/'+Date.now()+'+ss2.png'})
})