'use strict'

const { By, until } = require('selenium-webdriver')
const { openBrowser } = require('./browser')

// Variables for parameters. Change them to your need
const NavToLogin = By.id('menu-item-826')

// Go to the Login-Page
async function clickToLogin () {
  const browser = await openBrowser()
  await browser.wait(until.elementLocated(NavToLogin), 5 * 1000)
  await browser.findElement(NavToLogin).click()
}
module.exports.clickToLogin = clickToLogin

/*
async function example () {
  let button = await driver.wait(until.elementLocated(By.id('826')), 10000)
  await button.click()
}
*/
