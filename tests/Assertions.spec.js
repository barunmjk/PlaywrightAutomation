import {test,expect} from "@playwright/test";
import { clearScreenDown } from "node:readline";

test('Url Assertion', async({page})=>{
await  page.goto('https://demo.nopcommerce.com/');                         
await expect(page).toHaveURL('https://demo.nopcommerce.com/');
await expect(page).toHaveTitle('nopCommerce demo store. Home page title');

 const regBtn = await page.locator('id=register-button');
 await expect(regBtn).toHaveAttribute('type','submit');
})