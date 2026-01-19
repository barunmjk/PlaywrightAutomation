import {test,expect} from '@playwright/test'

 
// test("test1",async({page})=>{

//     console.log("test 1");
// })
//   test("test2",({browserName})=>{
//         console.log("this is test2");
//         if(browserName=='chromium'){
//             test.skip();
//             console.log("this is skip");
//         }
//   })

//   test("test3",(async)=>{
//     test.fixme();
//     console.log("test3")
//   })
  
//   test("test3",(async)=>{
//     test.fail();  //ye fail kar dega
//     console.log("this test4 ");
//     expect(1).toBe(1);  //pass
//   })

//     test("test3",(async)=>{
//     test.fail();  //ye fail hai    
//     console.log("this test4 ");
//     expect(1).toBe(2);  //fail  yaha fail +fail =pass kar dega
//   }) 

test("test code",async({page})=>{
    // test.slow();
    test.setTimeout(5000);
   await page.goto("https://www.demoblaze.com/index.html");


})