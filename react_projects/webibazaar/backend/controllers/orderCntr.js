const order = require("../model/order")


const createOrder=async (req, res) => {

    try {
      const { products } = req.body;
  
      // Create a new order
      const newOrder = new order({
        user: req.user._id,
        products: products.map(product => ({
          product: product.productId,
          quantity: product.quantity
        }))
      });
  
      await newOrder.save();
  
      res.status(201).json({ message: 'Order placed successfully', order: newOrder });
    } catch (error) {
      res.status(500).json({ message: 'Failed to place order', error: error.message });
    }
  }


const getOrder=function (req, res) {
    order.find({})
      .then((response) => {
        console.log("response", response);
        res.json({
          data: response,
          msg: 'Getting all the order data'
        });
      })
      .catch((err) => {
        res.send('error has occured', err);
      })
  }


const updateOrder=async (req, res) => {
    try {
      const updatedorder = await order.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedorder);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  
const deleteOrder= async (req, res) => {
    try {
      await order.findByIdAndDelete(req.params.id);
      res.status(200).json("order has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  }


module.exports={createOrder, getOrder , updateOrder,deleteOrder}









