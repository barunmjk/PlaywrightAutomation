import { test, expect } from '@playwright/test';

test('Youtube is Autosuggestion test ', async ({ page }) => {
 await page.goto("https://www.youtube.com/");

 await page.locator('[name="search_query"]').fill("playwright");
 await page.waitForSelector('.ytSuggestionComponentLeftContainer');
 const suggestions = await page.$$('.ytSuggestionComponentLeftContainer');

  for(const suggestionText of suggestions ){
    const text = suggestionText.textContent();
    expect(await text).toContain('playwright');
  
  }
});

test('flipkart Autosuggestion test',async({page}) =>{
  await page.goto('https://www.flipkart.com/');
  // page.locator('.b3wTlE').click();
  await page.locator('[name="q"]').fill('mobiles');
  await page.waitForSelector('.ryASxo');
  const autosuggestions =await page.$$('.ryASxo');
    for(const autosuggestion of autosuggestions){
     const text2=await autosuggestion.textContent();
 
      expect(await text2).toContain('mobiles');
 
    }
});