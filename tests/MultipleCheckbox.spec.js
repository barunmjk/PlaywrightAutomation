import {test,expect} from '@playwright/test';


test('Multiple checkbox ',async({page}) => {
  await page.goto('https://www.qa-practice.com/elements/checkbox/mult_checkbox');

    const mulLocator =["id=id_checkboxes_0","id=id_checkboxes_1","id=id_checkboxes_2"];

     for(const slocator of mulLocator){
        await page.locator(slocator).check();
      
     }
      for(const slocator of mulLocator){
        await page.locator(slocator).uncheck();
     
     }
     
  await page.waitForTimeout(2000);
})