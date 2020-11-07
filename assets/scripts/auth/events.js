'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui')
const api = require('./api')

const onSignUp = event => {
// prevent the page from refreshing when signing up
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.onError)
}

const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.onError)
}

const onSignOut = event => {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.onError)
}

const changePassword = event => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.onError)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  changePassword
}
