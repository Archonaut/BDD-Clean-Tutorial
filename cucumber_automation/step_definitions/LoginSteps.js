'use strict'
const { Given, When, Then } = require('cucumber')
const { goToHomePage } = require('../page_objects/mainPage')
const { clickToLogin } = require('../page_objects/navMenu')
const { ScrollDown, user, correctPassword } = require('../page_objects/loginPage')
const { greetings, profile, profileEmailInput } = require('../page_objects/profilePage')
const { username, password } = require('../config/index')

Given('I am on the landing page', async function () {
  await goToHomePage()
  await clickToLogin()
  await ScrollDown()
})

When('I enter my correct credentials', async function () {
  await user(username)
  await correctPassword(password)
})

Then('I am on my profile page', async function () {
  await greetings()
  await profile()
  await profileEmailInput()
})
