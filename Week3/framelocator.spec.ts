import {test} from "@playwright/test"

test("Frame Locator", async({page}))=>{
    await page.goto("https://leafground.com/frame.xhtml")

    const frameref = page.frameLocator()
