'use strict'
const { Given, When, Then } = require('cucumber')
const { openBrowser } = require('../page_objects/browser')
const { goToHomePage } = require('../page_objects/mainPage')
const { clickToLogin } = require('../page_objects/navMenu')
const { ScrollDown, user, correctPassword } = require('../page_objects/loginPage')
const { greetings, profile, profileEmailInput } = require('../page_objects/profilePage')
const { username, password } = require('../config/index')

Given('I am on the main page', { timeout: 2 * 5000 }, async function () {
  await openBrowser()
  await goToHomePage()
  await clickToLogin()
})

/*
When('I click on the button for the Login-Page', async function () {
  await goToHomePage()
})

Then('I get to the Login-Page', async function () {
  await clickToLogin()
})
*/

When('I scroll down', async function () {
  await ScrollDown()
  await user(username)
  await correctPassword(password)
})

/*
When('I fill in my username', async function () {
  await user(username)
})

When('I type in the correct password and confirm via Enter', async function () {
  await correctPassword(password)
})
*/

Then('I am greeted', { timeout: 2 * 5000 }, async function () {
  await greetings()
  await profile()
  await profileEmailInput()
})

/*
Then('I go to the profile', async function () {
  await profile()
})

Then('I check if the email exists', async function () {
  await profileEmailInput()
})
*/
