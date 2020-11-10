'use strict'

const config = require('../config')
const store = require('../store')

// (Create) listing a new product
const createProduct = formData => {
  return $.ajax({
    url: config.apiUrl + '/products',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

// Index the products that have been created
const getProducts = () => {
  return $.ajax({
    url: config.apiUrl + '/products',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// Update existing products
const updateProducts = formData => {
  return $.ajax({
    url: config.apiUrl + '/products/' + formData.product.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  createProduct,
  getProducts,
  updateProducts
}
