const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

  productid: {
    type: String,
    unique: true,
  },
  productname: {
    type: String,
  },
  description: String,
  price: {
    type: Number,
  },
  totalPrice: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  imageURL: {
    type: String,
  },

  category: {
    type: String,
  },


})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
