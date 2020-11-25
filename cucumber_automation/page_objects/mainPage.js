'use strict'

const { openBrowser } = require('./browser')

// Variables for parameters. Change them to your need
const homepage = 'https://testing-board.com'

// Get to the desired website
async function goToHomePage () {
  const browser = await openBrowser()
  await browser.get(homepage)
}
module.exports.goToHomePage = goToHomePage
