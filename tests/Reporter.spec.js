import {test} from '@playwright/test'

test("this is list report1",async({page})=>{
    await page.goto("https://www.flipkart.com/")

})
test("this is list report2",async({page})=>{
    await page.goto("https://www.amazon.in/")

})
test("this is list report3",async({page})=>{
    await page.goto("https://www.zomato.com/")

})
 
