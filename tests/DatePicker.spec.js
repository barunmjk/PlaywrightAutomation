import {test,expect} from '@playwright/test'

test('Date picker test ',async ({page})=>{
await  page.goto('https://testautomationpractice.blogspot.com/');

await page.click("#datepicker");
const day="29"
const month="October"
const year="2026"
 
 

while (true) {
      const datePickerMonth= await page.locator('.ui-datepicker-month').textContent();
        const datePickerYear=await page.locator('.ui-datepicker-year').textContent();
         
        if(month==datePickerMonth && year==datePickerYear)
        {
             const datePickerDate=await page.$$("//a[@class='ui-state-default']");
            for(const date of datePickerDate){
                if( await date.textContent()==day){
                    await date.click();
                  
                }
            }
             break; 
        }
        else
        await page.click("a[title='Next']");
         
}
  await page.waitForTimeout(3000);

 //a[@class="ui-state-default"]
}) 