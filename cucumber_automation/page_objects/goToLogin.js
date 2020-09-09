'use strict'

const { Builder, By } = require('selenium-webdriver')
let browser
module.exports.browser = browser

const openBrowser = async () => {
  browser = await new Builder().forBrowser('firefox').build()
  return browser
}
module.exports.openBrowser = openBrowser

async function goToHomePage () {
  await browser.get('https://testing-board.com')
}
module.exports.goToHomePage = goToHomePage

async function clickToLogin () {
  await browser.findElement(By.id('menu-item-826')).click()
}
module.exports.clickToLogin = clickToLogin
