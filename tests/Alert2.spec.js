import {test,expect} from '@playwright/test';


test.skip('Alert popup',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog alert popup',async dialog =>{
        expect(dialog.type()).toContain('Alert');
        expect(dialog.message()).toContain('I am a JS Alert');
        await dialog.accept();
    })
    page.click('button[onclick="jsAlert()"]');
    await expect(  page.locator('[id="result"]')).toHaveText('You successfully clicked an alert');
    await page.waitForTimeout(5000);
})

test.skip('Js Confirm',async({page})=>{
page.goto('https://the-internet.herokuapp.com/javascript_alerts');
page.on('dialog for Js confirm',async dialog=>{
  expect(dialog.type()).toContain('confirm');
  expect(dialog.message()).toContain('I am a JS Confirm');
  await dialog.accept();
});
 await page.click('button[onclick="jsConfirm()"]');
 await expect(await page.locator('[id="result"]')).toHaveText('You clicked: Cancel');
});
test('Js Prompt ',async({page})=>{
   await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on('dialog',async dialog=> {
        expect(dialog.type()).toBe('prompt');
        expect(dialog.message()).toContain('I am a JS prompt');
        await dialog.accept('kallu kaliya');

    })
    await page.click('button[onclick="jsPrompt()"]')
    await expect(page.locator('#result')).toHaveText('You entered: kallu kaliya');
    await page.waitForTimeout(4000);
});