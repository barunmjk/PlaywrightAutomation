import {test,expect} from '@playwright/test'

test('Static Web Table',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = await page.locator('[name="BookTable"]');
     const rows= await  table.locator('tbody tr');
     const columns= await  table.locator('tr th');
     console.log('Total rows :',await rows.count());
     console.log('Total cloumns :',await columns.count());

     for(let i=0;i<await rows.count();i++){
       const row= rows.nth(i);
     const tds=  row.locator('td');
     
     await page.waitForTimeout(2000);
     console.log('======================');
     for(let j=0;j<await tds.count();j++){
        console.log(await tds.nth(j).textContent());
          
     }
     }
})
