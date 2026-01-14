import {test,expect} from '@playwright/test';


test('Softassertion',async({page})=> {
    page.goto('https://demoblaze.com/index.html');
   /* await expect(page).toHaveURL('https://demoblaze.com/index.html');
     await expect(page).toHaveTitle('STOREW');*/
     await expect.soft(page).toHaveTitle('STOREq'); //<--- soft assertion
     await expect.soft(page).toHaveURL('https://demoblaze.com/index.html');
})