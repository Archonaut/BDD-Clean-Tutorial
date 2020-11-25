'use strict'

const { By, Key } = require('selenium-webdriver')
const { username, password } = require('../config')
const { openBrowser } = require('./browser')

// Variables for parameters. Change them to your need
const submitButton = By.id('wp-submit')
const userNameField = By.id('user_login')
const passWordField = By.id('user_pass')

// Scroll down to see the login-fields
async function ScrollDown () {
  const browser = await openBrowser()
  const submitButtonNew = await browser.findElement(submitButton)
  browser.executeScript('arguments[0].scrollIntoView(false);', submitButtonNew)
}
module.exports.ScrollDown = ScrollDown

// Put in the username
async function user () {
  const browser = await openBrowser()
  await browser.findElement(userNameField).sendKeys(Key.DELETE, username)
}
module.exports.user = user

// Put in the correct password and confirm via Enter
async function correctPassword () {
  const browser = await openBrowser()
  await browser.findElement(passWordField).sendKeys(Key.DELETE, password, Key.ENTER)
}
module.exports.correctPassword = correctPassword
