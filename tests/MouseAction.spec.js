import {test,expect} from '@playwright/test'

test.skip('Mouse hover Action ',async({page})=>{
  await page.goto('http://49.249.28.218:8888/');
  await page.fill("[name='user_name']","admin");
  await page.fill("[name='user_password']","admin");
  await page.click("#submitButton");
  const signoutbtn =await page.locator('img[src="themes/softed/images/user.PNG"]') 
   await signoutbtn.hover();
  await page.waitForTimeout(3000);
})
test.skip('Mouse right click Action ',async({page})=>{
  await page.goto('http://49.249.28.218:8888/');
  await page.fill("[name='user_name']","admin");
  await page.fill("[name='user_password']","admin");
  await page.click("#submitButton");
  const emailbtn= await page.locator("//a[text()='Email']");
  await  emailbtn.click({button:'right'})
  await page.waitForTimeout(3000);
})

test.skip('mouse action double click',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.dblclick("button[ondblclick='myFunction1()']");
    const field2=await page.locator("#field2");
     await  expect(field2).toHaveValue("Hello World!");
    await page.waitForTimeout(3000);
})

test('Drag and Drop ',async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');
   const dragMe= await page.locator("#draggable");
   const dropHere=await page.locator("#droppable");
   await dragMe.dragTo(dropHere);

   await page.waitForTimeout(3000);


} )