import test from "@playwright/test"
import {expect} from "@playwright/test"

//Testing assertions
test("assertions", async({page})=>{
    await page.goto("https://leafground.com/input.xhtml")


    const textbox =page.getByPlaceholder("Disabled")
    await expect(textbox).toBeDisabled()
    console.log("textbox is disabled and verified")

})
