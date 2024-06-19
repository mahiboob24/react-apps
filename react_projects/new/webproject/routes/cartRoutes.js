const express = require('express');
const router = express.Router();
const CartController = require('../controllers/CartController');

// Route to add an item to the cart
router.post('/cart/add', CartController.addItemToCart);

// Route to update item quantity in the cart
router.put('/cart/update', CartController.updateCartItemQuantity);

// Route to remove an item from the cart
router.delete('/cart/remove', CartController.removeItemFromCart);

module.exports = router;
