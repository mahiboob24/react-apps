const product = require("../model/product")



const createProduct= async (req, res) => {
  try {
      const data = new product(req.body);
      await data.save();
      res.status(201).json(data);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
}

const getProduct=function (req, res) {
    product.find({})
      .then((response) => {
        // console.log("response", response);
        res.json({
          data: response,
          msg: 'Getting all the product data'
        });
      })
      .catch((err) => {
        res.status(404).send('error has occured', err);
      })
  }

  const getProductById = async (req, res) => {
  
    const item = await product.findById(req.params.id);
    if (item) {
      return res.json(item);
    } else {
     
      res.status(404);
      throw new Error('Product not found');
    }
  }





const updateProduct= async (req, res) => {
    try {
      const updatedProduct = await product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  }


const deleteProduct=async (req, res) => {
    try {
      await product.findByIdAndDelete(req.params.id);
      res.status(200).json("Product has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  }







module.exports={createProduct,getProductById, getProduct,updateProduct,deleteProduct}







