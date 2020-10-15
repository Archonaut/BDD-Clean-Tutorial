'use strict'

const { openBrowser } = require('./browser')

// Nicht nach Aktionen benennen! Nach Pages/Themen unterteilen, z.B. Nav-Leiste, Formular u.Ä.
// Hinter jedem Klick / Aktion eine Assertion, um sicherzugehen

// Variables for parameters. Change them to your need
const homepage = 'https://testing-board.com'

// Get to the desired website
async function goToHomePage () {
  const browser = await openBrowser()
  await browser.get(homepage)
}
module.exports.goToHomePage = goToHomePage
