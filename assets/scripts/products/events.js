'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui')
const api = require('./api')

// post a new product to the app
const createProduct = event => {
  console.log('Create Product is firing')
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.createProduct(formData)
    .then(ui.createProductSuccess)
    .catch(ui.onError)
}

// get information on existing products on the app
const getProducts = event => {
  console.log('Get products is firing')
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.getProducts(formData)
    .then(ui.getProductSuccess)
    .catch(ui.onError)
}

// update the information on an existing product
const updateProducts = event => {
  console.log('Update Products is firing')
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.updateProducts(formData)
    .then(ui.updateProductsSuccess)
    .catch(ui.onError)
}

module.exports = {
  createProduct,
  getProducts,
  updateProducts
}
