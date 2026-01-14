import {test,expect} from '@playwright/test';

test('',async ({page})=>{
   await  page.goto('https://testautomationpractice.blogspot.com/');
 const table=  await page.locator('[id="productTable"]')
 const columns =await table.locator('thead tr th');
 console.log("column count is:",await columns.count());
  const rows =await table.locator('tbody tr');
 console.log("row count is:",await rows.count());
 //2-using filter method and select one by one
  //  const machedRow= row.filter({
  //     has : page.locator('td'),
  //     hasText: 'Wireless Earbuds'
  //   })
  //   await machedRow.locator('input[type="checkbox"]').check();
  //   await page.waitForTimeout(3000);
 
  /* 3- creating function and selecting all
  async function selectProduct(row,page,name){
   const machedRow= rows.filter({
      has : page.locator('td'),
      hasText: name
    })
    await machedRow.locator('input[type="checkbox"]').check();
    await page.waitForTimeout(2000);
  }
  await selectProduct(rows,page,'Smartphone');
  await selectProduct(rows,page,'Laptop');
  await selectProduct(rows,page,'Tablet ');
  await selectProduct(rows,page,'Smartwatch');

  */

  /* 4--print all product details using loop

   for(let i=0;i<await rows.count();i++){
    const row=rows.nth(i);
    const tds=row.locator('td');
    for(let j=0;j<await tds.count()-1;j++){
        console.log(await tds.nth(j).textContent())
    }
   }
    */

      const pages= await page.locator('#pagination li a');
      console.log(await pages.count());

      for(let  p=0;p<await pages.count();p++){
      if(p>0){
        await pages.nth(p).click();
        await page.waitForTimeout(2000);
      }
       for(let i=0;i<await rows.count();i++){
    const row=rows.nth(i);
    const tds=row.locator('td');
    for(let j=0;j<await tds.count()-1;j++){
        console.log(await tds.nth(j).textContent())
    }
   }
      }
})