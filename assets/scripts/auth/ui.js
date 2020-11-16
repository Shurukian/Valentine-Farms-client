'use strict'
const store = require('../store')

const signUpSuccess = res => {
  $('#res-message').html('Thanks for signing up')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = res => {
  store.user = res.user
  $('#res-message').html('You have successfully signed in!')
  $('#change-password-button').show()
  $('#sign-out-form').show()
  $('#sign-up-button').hide()
  $('#sign-in-button').hide()
  $('#products-control-all').show()
  $('#sign-in-form').trigger('reset')
}

const signOutSuccess = res => {
  $('#change-password-button').hide()
  $('#sign-out-form').hide()
  $('#sign-up-button').show()
  $('#sign-in-button').show()
  $('#products-control-all').hide()
  $('#display-products').empty()
  $('#res-message').html('We hope to see you back soon!')
}

const changePasswordSuccess = res => {
  $('#res-message').html('Your password has been successfully changed!')
  $('#form').trigger('reset')
}

const onError = () => {
  $('#error-message').html('An error has occured, Please try again.')
  $('#form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  onError
}
