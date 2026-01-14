import {test,expect} from '@playwright/test';


test('DropDown ',async({page})=>{
    await page.goto('https://formstone.dev/demo/components/dropdown.html');
    // await page.locator('id=demo_basic-dropdown-selected').selectOption('One');
    const options =await page.$$('#demo_basic-dropdown-selected option');

       console.log("number of option",options.length);
    await page.waitForTimeout(5000);
  
});