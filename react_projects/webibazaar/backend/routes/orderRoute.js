

const express=require("express")
const {createOrder, getOrder,updateOrder,deleteOrder}=require('../controllers/orderCntr')

const formidable = require("express-formidable")

const router=express.Router()

router.post('/createOrder', formidable(),createOrder)
router.get('/getOrder', formidable(),getOrder)
router.put('/updateOrder/:id', formidable(),updateOrder)
router.delete('/deleteOrder/:id', formidable(),deleteOrder)





module.exports=router