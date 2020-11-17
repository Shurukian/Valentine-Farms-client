'use strict'
const store = require('../store')

const signUpSuccess = res => {
  $('#message').html('Thanks for signing up')

  // Resets!
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#create-form-group').trigger('reset')
  $('#update-products').trigger('reset')
  $('#delete-products').trigger('reset')
}

const signInSuccess = res => {
  store.user = res.user
  $('#message').html('You have successfully signed in!')
  $('#change-password-button').show()
  $('#sign-out-form').show()
  $('#sign-up-button').hide()
  $('#sign-in-button').hide()
  $('#products-control-all').show()

  // Resets!
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#create-form-group').trigger('reset')
  $('#update-products').trigger('reset')
  $('#delete-products').trigger('reset')
}

const signOutSuccess = res => {
  $('#change-password-button').hide()
  $('#sign-out-form').hide()
  $('#sign-up-button').show()
  $('#sign-in-button').show()
  $('#products-control-all').hide()
  $('#display-products').empty()
  $('#message').html('We hope to see you back soon!')

  // Resets!
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#create-form-group').trigger('reset')
  $('#update-products').trigger('reset')
  $('#delete-products').trigger('reset')
}

const changePasswordSuccess = res => {
  $('#message').html('Your password has been successfully changed!')

  // Resets!
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#create-form-group').trigger('reset')
  $('#update-products').trigger('reset')
  $('#delete-products').trigger('reset')
}

const onError = () => {
  $('#message').html('An error has occured, Please try again.')

  // Resets!
  $('#sign-up-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').trigger('reset')
  $('#create-form-group').trigger('reset')
  $('#update-products').trigger('reset')
  $('#delete-products').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  onError
}
