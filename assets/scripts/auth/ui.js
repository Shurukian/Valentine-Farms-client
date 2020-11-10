'use strict'
const store = require('../store')

const signUpSuccess = res => {
  console.log('You are signed up')
  $('#message').text('Thanks for signing up')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = res => {
  store.user = res.user
  $('#message').text('You have successfully signed in!')
  $('#sign-in-form').trigger('reset')
}

const signOutSuccess = res => {
  $('#message').text('We hope to see you back soon!')
}

const changePassword = res => {
  console.log('You have changed your password')
  $('#message').text('Your password has been successfully changed!')
  $('#change-password-form').trigger('reset')
}

const onError = () => {
  $('#error-message').text('An error has occured, Please try again.')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePassword,
  onError
}
