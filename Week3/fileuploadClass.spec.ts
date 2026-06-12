/*Step1: login to URL
https://www.naukri.com/registration/createAccount


Step2: click on I'm experienced


Step3: upload the file using setInputFiles()*/

import test from "@playwright/test"
import path from "@node:path"

test("Checking file upload", async({page}=>{
    await page.goto("https://www.naukri.com/registration/createAccount")
    await page.locator(' //div[@class="textWrap"][1]').click()

}))
