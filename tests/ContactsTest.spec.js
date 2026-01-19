import {test,expect} from '@playwright/test'
import { LoginPageVtiger } from '../pages/VtigerLogin'
import {POMContacts} from '../pages/POMContacts'
test("this is contact test ",async ({page})=>{
   await page.goto("http://49.249.28.218:8888/");
   const loginvtiger =new LoginPageVtiger(page);
   await loginvtiger.loginPage("admin","admin");
    
     const contactmod=new POMContacts(page);
     await contactmod.createContact("jetha","lal","warrior","QA","warrior@123gmail.com","champak","9876543212");
     await page.waitForTimeout(3000);
       
})