const express=require("express")


const {createProduct, getProduct,updateProduct,deleteProduct ,getProductById}=require('../controllers/productCntr')
const formidable = require("express-formidable")

const router=express.Router()

// router.post('/createProduct', createProduct)
router.get('/getProduct', formidable(),getProduct)
router.get('/getProductById/:id',formidable(),getProductById)
router.put('/updateProduct/:id', formidable(),updateProduct)
router.delete('/deleteProduct/:id', formidable(),deleteProduct)


router.post('/products',createProduct);


module.exports=router
