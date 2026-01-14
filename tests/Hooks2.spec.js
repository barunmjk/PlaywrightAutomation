import {test,expect} from '@playwright/test'
 let page;
   test.beforeEach("",async({browser})=>{
    page=await browser.newPage();
    //login
    await page.goto("https://www.demoblaze.com/index.html");
    await page.click("#login2");
    await page.fill("#loginusername","pavanol");
    await page.fill("#loginpassword","test@123");
    await page.click("button[onclick='logIn()']");
      await page.waitForTimeout(3000);
   })

    test.afterEach(async()=>{
      //logout
      await page.click("#logout2");
        await page.waitForTimeout(3000);
    })

  test("homepage test ",async()=>{
    //login
   
    
    //homepage
    const products =await page.$$(".hrefch");
     expect(products).toHaveLength(9);
    await page.waitForTimeout(3000);
 
    
})
  test("add to cart test",async()=>{
    
    //add to cart
      await page.click("img[src='imgs/galaxy_s6.jpg']");
      await page.click("a[onclick='addToCart(1)']")
      page.on("dialog",async dialog=>{
        expect(dialog.message()).toContain('Product added.');
        await dialog.accept();
      })
     await page.waitForTimeout(3000);
})