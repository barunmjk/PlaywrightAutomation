import {test,expect} from '@playwright/test'

let page;

test.beforeAll(async({browser})=>{
    page=await browser.newPage();
    //login
    await page.goto("https://www.demoblaze.com/index.html");
    await page.click("#login2");
    await page.fill("#loginusername","pavanol");
    await page.fill("#loginpassword","test@123");
    await page.click("button[onclick='logIn()']");
})

test("Homepage test",async()=>{
const products=await page.$$(".hrefch");
expect(products).toHaveLength(9);
console.log("=====first test case pass=====");
})

test("add to cart ",async()=>{
    await page.click("img[src='imgs/galaxy_s6.jpg']");
    await page.click("a[onclick='addToCart(1)']");
    page.on("dialog",async dialog=>{
        expect(dialog.message()).toContain("Product added.");
        await  dialog.accept();
    })
    console.log("============second test case pass=====");
})
test.afterAll(async()=>{
    //logout
    await page.click("#logout2");

})
