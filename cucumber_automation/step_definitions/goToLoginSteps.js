'use strict'
const { Given, When, Then } = require('cucumber')
const { goToHomePage, clickToLogin, openBrowser } = require('../page_objects/goToLogin')

Given('I am on the main page', async function () {
  await openBrowser()
})

When('I click on the login button', async function () {
  await goToHomePage()
})

Then('I should get to the Login-Page', async function () {
  await clickToLogin()
})
