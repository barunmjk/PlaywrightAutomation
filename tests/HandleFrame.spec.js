import {test,expect } from '@playwright/test'


test('handling frame',async ({page})=> {
 await  page.goto('https://ui.vision/demo/webtest/frames/');

  const allframe=await page.frames(); //<- total frame we get in array form 
  console.log('all frame is :',allframe.length);

   //approach 1:using url  or name
   //const var =await page.frame('name');
  const frame1 =await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
  await frame1.fill('[name="mytext1"]','hello');
 await page.waitForTimeout(3000);
 
})

//2nd apporach 
test('handling frameloc',async ({page})=> {
 await page.goto('https://ui.vision/demo/webtest/frames/');

 const frame2= await page.frameLocator('frame[src="frame_2.html"]').locator('[name="mytext2"]');
 await frame2.fill('Hello');
 

 const frame3= await page.frameLocator('frame[src="frame_3.html"]').locator('[name="mytext3"]');
 await frame3.fill('Hello');
 

 const frame4= await page.frameLocator('frame[src="frame_4.html"]').locator('[name="mytext4"]');
 await frame4.fill('Hello');
 

 const frame1=  await page.frameLocator('frame[src="frame_1.html"]').locator('[name="mytext1"]');
 await frame1.fill('Hello');
await page.waitForTimeout(2000);
})