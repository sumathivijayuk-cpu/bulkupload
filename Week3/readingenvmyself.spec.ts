import {test} from "@playwright/test"
import dotenv from "dotenv"            

//to read single env file
dotenv.config({path:`Utils/qa.env`})  

// to read multiple env file
//let fileName = process.env.envFileName || "qa"     //here if i dont set the environment using the command $env:envFile 
//it's set as undefined in that scenario by default "qa" should be taken
//dotenv.config({path:`Utilis/${fileName}.env`})    

test("Learn to use env file in playwright", async({page})=>{
    await page.goto(process.env.L_url as string)
    await page.locator('#username').fill(process.env.L_username as string)
    await page.locator('#password').fill(process.env.L_password as string)
    await page.locator('.decorativeSubmit').click()
})


/* 
command to check the environment
$env:envFile
command to set or change the environment
$env:envFile='qa'
command to unset the env
$env:envFile='' */

