const Cart = require("../model/cart")
const product= require("../model/product")



const createCart=async function(userId, productId, quantity) {
    try {
  
      
      const getproduct = await product.findById(productId);
  
      if (!getproduct) {
        throw new Error('Product not found');
      }
  
      if (getproduct.quantity < quantity) {
        throw new Error('Insufficient product quantity');
      }
  
      // Decrease product quantity in inventory
      getproduct.quantity -= quantity;
      await getproduct.save();
  
      // Add product to the user's cart
      const userCart = await Cart.findOneAndUpdate(
        { user: userId },
        {
          $addToSet: {
            products: { product: productId, quantity },
          },
        },
        { upsert: true, new: true }
      );
  
      return userCart;
    } catch (err) {
      throw new Error(err.message);
    }
  }




// Assuming you have a User model and Product model

// Controller Logic for adding a product to the cart
const addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    // Find the user by ID and populate their cart
    const user = await user.findById(userId).populate('cart.product');

    // Check if the product is already in the cart
    const productInCartIndex = user.cart.findIndex(
      (item) => item.product.id === productId
    );

    if (productInCartIndex !== -1) {
      // If the product is already in the cart, update the quantity
      user.cart[productInCartIndex].quantity += parseInt(quantity, 10);
    } else {
      // If the product is not in the cart, add it
      user.cart.push({ product: productId, quantity: parseInt(quantity, 10) });
    }

    // Save the updated cart
    await user.save();

    res.json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error adding product to cart: ', error);
    res.status(500).json({ message: 'Server Error' });
  }
};












const getCart=async (req, res) => {
    try {
      const carts = await Cart.find();
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json(err);
    }
  }

const updateCart=async (req, res) => {
    try {
      const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  
const deleteCart=async (req, res) => {
    try {
      await Cart.findByIdAndDelete(req.params.id);
      res.status(200).json("Cart has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  }












module.exports={createCart, addToCart,getCart,updateCart,deleteCart}