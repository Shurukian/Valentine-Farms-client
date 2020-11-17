'use strict'

const createProductSuccess = res => {
  $('#message').html('Thank you for listing your product')
  // Triggers!
  $('#create-form-group').trigger('reset')
  $('#update-products').trigger('reset')
  $('#delete-products').trigger('reset')
  $('#close-form').trigger('reset')
}

const getProductSuccess = res => {
  const products = res.products

  $('#display-products').html(`<h3>Here is a list of the items that have been posted:
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

  // Triggers!
  $('#create-form-group').trigger('reset')
  $('#update-products').trigger('reset')
  $('#delete-products').trigger('reset')
  $('#close-form').trigger('reset')
}

const updateProductsSuccess = res => {
  $('#message').html('You have successfully updated your product!')

  // Triggers!
  $('#create-form-group').trigger('reset')
  $('#update-products').trigger('reset')
  $('#delete-products').trigger('reset')
  $('#close-form').trigger('reset')
}

const deleteProductsSuccess = res => {
  $('#message').html('Your Product has been successfully removed.')

  // Triggers!
  $('#create-form-group').trigger('reset')
  $('#update-products').trigger('reset')
  $('#delete-products').trigger('reset')
}

const onError = () => {
  $('#message').html('An error has occured, Please try again.')

  // Triggers!
  $('#create-form-group').trigger('reset')
  $('#update-products').trigger('reset')
  $('#delete-products').trigger('reset')
}

module.exports = {
  createProductSuccess,
  getProductSuccess,
  updateProductsSuccess,
  deleteProductsSuccess,
  onError
}
