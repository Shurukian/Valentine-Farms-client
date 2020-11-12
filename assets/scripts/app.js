'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const productEvents = require('./products/events')
// const productEvents = require('./product/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // authentication events
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out-form').on('submit', authEvents.onSignOut)
  $('#change-password-form').on('submit', authEvents.changePassword)

  // product events
  $('#create-form-group').on('submit', productEvents.createProduct)
  $('#get-products').on('click', productEvents.getProducts)
  $('#update-products').on('submit', productEvents.updateProducts)
  $('#delete-products').on('submit', productEvents.deleteProducts)

  // showing and hiding
  $('#sign-out-form').hide()
  $('#change-password-button').hide()
  $('#products-control-all').hide()
})
