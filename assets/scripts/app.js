'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// const productEvents = require('./product/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out-form').on('submit', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.changePassword)
})
