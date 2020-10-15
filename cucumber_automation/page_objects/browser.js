'use strict'

const { Builder } = require('selenium-webdriver')

// Variables for parameters. Change them to your need
const driver = 'firefox'

let browser

// Open the Browser and maximize it
async function openBrowser () {
  if (browser) return browser
  browser = await new Builder().forBrowser(driver).build()
  await browser.manage().window().maximize()
  return browser
}
module.exports.openBrowser = openBrowser
