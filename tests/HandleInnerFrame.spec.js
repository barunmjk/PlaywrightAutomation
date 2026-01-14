import {test,expect} from '@playwright/test'

test('Inner frame',async ({page}) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
  const  frame3 =await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
  
  const child= await frame3.childFrames(); 
   await child[0].locator('//*[@id="i21"]/div[2]').check();
   await page.waitForTimeout(2000);
});