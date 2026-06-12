/* Classroom1:
https://login.salesforce.com/?locale=in


testID
dilipkumar.rajendran@testleaf.com
TestLeaf@2025


yuvarani.sekar@testleaf.com
Testleaf@2026


steps:
-> create folder as utils -> create json file 
-> pass values in json file
-> Create Test */

import test from "@playwright/test"
import readData from "../Utilis/readData.json"

for (let value of readData){
    test(`Learn to read json file ${value.TestCaseID}`,async({page})=>{
        await page.goto('https://login.salesforce.com/?locale=in')
        await page.locator('#username').fill(value.username)
        await page.locator('#password').fill(value.password)
        await page.locator('#Login').click()
    })
}