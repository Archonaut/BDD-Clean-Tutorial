/*
'use strict'

// Nicht nach Aktionen benennen! Nach Pages/Themen unterteilen, z.B. Nav-Leiste, Formular u.Ä.
// Hinter jedem Klick / Aktion eine Assertion, um sicherzugehen

const { Builder, By, Key, until } = require('selenium-webdriver')
const { username, password } = require('../config')
// Wenn ich einen Ordner require, dann wird index eingebunden, daher endet die Zeile darüber mit config

let browser

// Open the Browser and maximize it
const openBrowser = async () => {
  browser = await new Builder().forBrowser('firefox').build()
  await browser.manage().window().maximize()
  return browser
}
module.exports.openBrowser = openBrowser

// Get to the desired website
async function goToHomePage () {
  await browser.get('https://testing-board.com')
}
module.exports.goToHomePage = goToHomePage

// Go to the Login-Page
// Ist hardcoded, 'menu-item-826 auslagern! Kann auch in der selben Datei deklariert werden'
async function clickToLogin () {
  await browser.wait(until.elementLocated(By.id('menu-item-826')), 5 * 1000)
  await browser.findElement(By.id('menu-item-826')).click()
}

// assert.strictEqual(await element.getText(), 'Hello from JavaScript!');

module.exports.clickToLogin = clickToLogin

// Added 11.10.2020
async function startOnLoginPage () {
  await browser.get('https://www.testing-board.com/login')
}
module.exports.startOnLoginPage = startOnLoginPage

// Scroll down to see the login-fields
async function ScrollDown () {
  const submitButton = await browser.findElement(By.id('wp-submit'))
  browser.executeScript('arguments[0].scrollIntoView(false);', submitButton)
}
module.exports.ScrollDown = ScrollDown

// Put in the username
async function user () {
  await browser.findElement(By.id('user_login')).sendKeys(Key.DELETE, username)
}
module.exports.user = user

// Put in the wrong password
async function correctPassword () {
  await browser.findElement(By.id('user_pass')).sendKeys(Key.DELETE, password)
}
module.exports.correctPassword = correctPassword

// Confirm the input via Enter
async function confirm () {
  await browser.findElement(By.id('user_pass')).sendKeys(Key.ENTER)
  // await Sleep(10000)
}
module.exports.confirm = confirm

// Get the greetings
async function greetings () {
  await browser.wait(until.elementLocated(By.className('display-name')), 5 * 1000)
}
module.exports.greetings = greetings

// Click on "Ziel des Portals"
async function profile () {
  await browser.findElement(By.className('display-name')).click()
}
module.exports.profile = profile

async function profileEmailInput () {
  await browser.wait(until.elementLocated(By.id('email')), 5 * 1000)
}
module.exports.profileEmailInput = profileEmailInput

// Den Login als Funktion (POM) mit Parametern erstellen
*/
