// CartController.js

const Cart = require('../model/cart');

const CartController = {
    async addItemToCart(req, res) {
        try {
          const { userId, productId, quantity } = req.fields;
    
          let cart = await Cart.findOne({ user: userId });
    
          if (!cart) {
            // If the cart doesn't exist for the user, create a new cart
            cart = new Cart({ user: userId, items: [] });
          }
    
          // Check if the product ID is provided, and if so, add it to the cart
          if (productId) {
            const existingItem = cart.items.find(item => item.product.toString() === productId);
    
            if (existingItem) {
              // If the item already exists in the cart, update its quantity
              existingItem.quantity += parseInt(quantity);
            } else {
              // If the item doesn't exist, add it to the cart
              cart.items.push({ product: productId, quantity: parseInt(quantity) });
            }
          } else {
            return res.status(400).json({ message: 'Product ID is required' });
          }
    
          // Update total items and total price in the cart
          cart.totalItems = cart.items.reduce((total, item) => total + item.quantity, 0);
          // Implement logic to calculate totalPrice based on product prices
          
          await cart.save();
          
          res.status(200).json({ message: 'Item added to cart successfully' });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      },


    async updateCartItemQuantity(req, res) {
      try {
        const { userId, itemId, quantity } = req.fields;
  
        const cart = await Cart.findOne({ user: userId });
  
        if (!cart) {
          return res.status(404).json({ message: 'Cart not found' });
        }
  
        const itemToUpdate = cart.items.find(item => item._id.toString() === itemId);
  
        if (!itemToUpdate) {
          return res.status(404).json({ message: 'Item not found in cart' });
        }
  
        itemToUpdate.quantity = parseInt(quantity);
  
        // Update total items and total price in the cart
        cart.totalItems = cart.items.reduce((total, item) => total + item.quantity, 0);
        // Implement logic to recalculate totalPrice based on product prices
  
        await cart.save();
  
        res.status(200).json({ message: 'Cart item quantity updated successfully' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },






    async removeItemFromCart(req, res) {
        try {
          const { userId, itemId } = req.fields;
    
          const cart = await Cart.findOne({ user: userId });
    
          if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
          }
    
          cart.items = cart.items.filter(item => item._id.toString() !== itemId);
    
          cart.totalItems = cart.items.reduce((total, item) => total + item.quantity, 0);
          // Implement logic to recalculate totalPrice based on product prices
    
          await cart.save();
    
          res.status(200).json({ message: 'Item removed from cart successfully' });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      },












  };
  
  module.exports = CartController;
  

  