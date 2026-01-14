import {test,expect} from '@playwright/test'

test('this is Dynamic Web Table',async({page})=>{
   await page.goto('https://testautomationpractice.blogspot.com/');
   const table =await page.locator('#taskTable');
   const columns=await table.locator('#headers th')
   console.log('total columns is :',await columns.count());
     const rows=await table.locator('#rows tr')
   console.log('total rows is :',await rows.count());

   for(let i=0;i<await rows.count();i++){
      const row=rows.nth(i);
      const tds=row.locator('td');
       await page.waitForTimeout(2000);
      for(let j=0;j<await tds.count();j++){
        console.log(await tds.nth(j).textContent());
      }
   }
})