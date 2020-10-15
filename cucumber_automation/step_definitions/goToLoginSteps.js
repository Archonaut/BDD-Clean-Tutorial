// PW u.Ä. als Parameter einbauen, d.h. hier auf die entsprechende Datei (data.js) zugreifen, nicht bereits in den Page Objetcs

'use strict'
const { Given, When, Then } = require('cucumber')
const { openBrowser } = require('../page_objects/browser')
const { goToHomePage } = require('../page_objects/mainPage')
const { clickToLogin } = require('../page_objects/navMenu')
const { ScrollDown, user, correctPassword } = require('../page_objects/loginPage')
const { greetings, profile, profileEmailInput } = require('../page_objects/profilePage')
const { username, password } = require('../config/index')

Given('I am on the main page', async function () {
  await openBrowser()
})

When('I click on the button for the Login-Page', async function () {
  await goToHomePage()
})

When('I get to the Login-Page', async function () {
  await clickToLogin()
})

When('I scroll down', async function () {
  await ScrollDown()
})

When('I fill in my username', async function () {
  await user(username)
})

When('I type in the correct password and confirm via Enter', async function () {
  await correctPassword(password)
})

Then('I am greeted', async function () {
  await greetings()
})

Then('I go to the profile', async function () {
  await profile()
})

Then('I check if the email exists', async function () {
  await profileEmailInput()
})
