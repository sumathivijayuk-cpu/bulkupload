import test from "@playwright/test";
import {chromium,firefox,webkit} from "@playwright/test";  

test('launchChrome', async() =>{

    const browser =await chromium.launch({headless:false})
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.google.com/");
    await page.waitForTimeout(2000);
    console.log( await page.title());
    console.log("Chrome Browser launched ");
    
})

test('launchfirefox', async() =>{

    const browser =await firefox.launch({headless:false})
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.amazon.com/");
    
    await page.waitForTimeout(2000);
    console.log( await page.title());
    console.log(" Firefox Browser launched Successfully");
})



test('launchWebkit', async() =>{

    const browser =await webkit.launch({headless:false})
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.flipkart.com/");
    
    await page.waitForTimeout(2000);

    console.log(await page.title());
     console.log("Webkit Browser launched ");
})