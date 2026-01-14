import {test,expect} from '@playwright/test';


test('Handle alert',async({page})=>{
 await page.goto('https://testautomationpractice.blogspot.com/');

 page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain('alert');
    expect(dialog.message()).toContain('I am an alert box!');
    await dialog.accept();
 });
 await page.waitForTimeout(3000);
 await page.click('[id="alertBtn"]');
  
});

test.skip("confirmation Dialog",async({page})=> {
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog',async dialog=>{
     expect(dialog.type()).toContain('confirm');
    expect(dialog.message()).toContain('Press a button!');
    await dialog.accept();
    // await dialog.dismiss();
    });
    await page.click('[id="confirmBtn"]');
    await expect(page.locator('[id="demo"]')).toHaveText('You pressed OK!');
    await page.waitForTimeout(5000);

})

test('prompt dialog',async({page}) => {
 await page.goto('https://testautomationpractice.blogspot.com/');
 page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain('prompt');
    expect(dialog.message()).toContain('Please enter your name:');
    await dialog.accept('kalu');
 });
 await page.click('[id="promptBtn"]');
  expect(await page.locator('[id="demo"]')).toHaveText('Hello kalu! How are you today?');
  await page.waitForTimeout(5000);
})