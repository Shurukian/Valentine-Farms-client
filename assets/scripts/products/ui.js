'use strict'

const store = require('../store')

const createProductSuccess = res => {
  $('#res-message').html('Thank you for listing your product')
}

const getProductSuccess = res => {
  const user = store.user
  const products = res.products

  $('#display-products').html(`<h3>${user.email} Here is a list of the items that you have posted:
    ${products.length}</h3>`)

  products.forEach(products => {
    const productHTML = (`
      <p>Product ID: ${products._id}
      <h4>Name: ${products.name}</h4>
      <p>Expiration: ${products.expiration}</p>
      <p>Quality: ${products.isOrganic}</p>
      <p>Quantity: ${products.quantity}</p>
      <br>
    `)
    $('#display-products').append(productHTML)
  })
}

const updateProductsSuccess = res => {
  $('#res-message').html('You have successfully updated your product!')
}

const deleteProductsSuccess = res => {
  $('#res-message').html('Your Product has been successfully removed.')
}

const onError = () => {
  $('#error-message').html('An error has occured, Please try again.')
  $('form').trigger('reset')
}

module.exports = {
  createProductSuccess,
  getProductSuccess,
  updateProductsSuccess,
  deleteProductsSuccess,
  onError
}
