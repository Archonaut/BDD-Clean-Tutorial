'use strict'

// Requires to be logged in

const { By, until } = require('selenium-webdriver')
const { openBrowser } = require('./browser')

// Variables for parameters. Change them to your need
const profileMenu = By.className('display-name')
const eMailField = By.id('email')

// Get the greetings
async function greetings () {
  const browser = await openBrowser()
  await browser.wait(until.elementLocated(profileMenu), 5 * 1000)
}
module.exports.greetings = greetings

// Click on Profile-Button
async function profile () {
  const browser = await openBrowser()
  await browser.findElement(profileMenu).click()
}
module.exports.profile = profile

async function profileEmailInput () {
  const browser = await openBrowser()
  await browser.wait(until.elementLocated(eMailField), 5 * 1000)
}
module.exports.profileEmailInput = profileEmailInput
