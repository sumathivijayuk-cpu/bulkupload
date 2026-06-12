import test from "@playwright/test"
import fs from "fs"
import path from "path"
import {parse} from "csv-parse/sync"

let value :any[] =parse(fs.readFileSync(path.join(__dirname,"../Utilis/data.csv")),{
    columns: true, skip_empty_lines: true
})  


//let value1 : any[]= parse(fs.readFileSync(path.join(__dirname,".
// ./Utilis/data.csv")),{
//    columns : true, skip_empty_lines : true
//})


for (let login of value){
    test(`Learn to read CSV file ${login.tcid}`, async({page})=>{
        await page.goto('https://login.salesforce.com/?locale=in')
        await page.locator('#username').fill(login.username)
        await page.locator('#password').fill(login.password)
        await page.locator('#Login').click()
    })

}