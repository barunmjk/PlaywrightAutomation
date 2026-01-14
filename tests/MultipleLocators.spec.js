import{test,expect} from '@playwright/test';


test('myultipleLocators',async ({page}) => {
await page.goto('https://demoblaze.com/index.html');

await page.waitForTimeout(2000);
const products=await page.$$('//h4[@class="card-title"]');

 for(const product of products)
 {
   const name= await product.textContent();
   console.log(name);
 }
})