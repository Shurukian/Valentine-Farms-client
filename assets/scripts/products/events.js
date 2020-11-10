'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui')
const api = require('./api')

const createProduct = event => {
  console.log('Create Product is firing')
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.createProduct(data)
    .then(ui.createProductSuccess)
    .catch(ui.onError)
}

const getProducts = event => {
  console.log('Get products is firing')
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.getProducts(data)
    .then(ui.getProductSuccess)
    .catch(ui.onError)
}

module.exports = {
  createProduct,
  getProducts
}
