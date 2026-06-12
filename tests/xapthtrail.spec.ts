
import test from '@playwright/test'

test('xpathtrail', async(page) => ({
    await.page.goto("https://login.salesforce.com/?locale=in")
    await xpath(//div[@id='usernamegroup']//input[1]).fill("dilipkumar.rajendran@testleaf.com"))
}))