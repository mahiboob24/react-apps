let express = require('express')
require("dotenv").config()
const formidable = require('express-formidable')
const mongoose=require("mongoose")
let app = express()



mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => console.log('Connected!'))
.catch(() => console.log(' not Connected!'))

const usershema= new mongoose.Schema(
    {
        name:String,
        price:Number
    }
)

const usermodel=mongoose.model('test',usershema)

app.get('/getdata', formidable(), function (req, res) {
    usermodel.find({}).then((users)=>{
        res.json(users)
    }).catch((error)=>console.log(error))
})

app.listen(3000)