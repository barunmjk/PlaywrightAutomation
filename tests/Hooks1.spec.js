import {test,expect} from '@playwright/test'

test.skip("homepage test ",async({page})=>{
    //login
    await page.goto("https://www.demoblaze.com/index.html");
    await page.click("#login2");
    await page.fill("#loginusername","pavanol");
    await page.fill("#loginpassword","test@123");
    await page.click("button[onclick='logIn()']");
    
    //homepage
    const products =await page.$$(".hrefch");
    await expect(products).toHaveLength(9);
    await page.waitForTimeout(2000);
    //logout
    await page.click("#logout2");
})
test("add to cart test",async({page})=>{
    //login
     await page.goto("https://www.demoblaze.com/index.html");
    await page.click("#login2");
    await page.fill("#loginusername","pavanol");
    await page.fill("#loginpassword","test@123");
    await page.click("button[onclick='logIn()']");
    //add to cart
      await page.click("img[src='imgs/galaxy_s6.jpg']");
      await page.click("a[onclick='addToCart(1)']")
    //logout
     await page.click("#logout");
     await page.waitForTimeout(3000);
})