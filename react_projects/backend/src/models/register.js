const mongoose=require("mongoose")

const empSchema=new mongoose.Schema({
    username: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:Number,
        required:true
    },
    cpassword:{
        type:Number,
        required:true
    }
})
const reg=new mongoose.model("Register",empSchema)
module.exports=reg



