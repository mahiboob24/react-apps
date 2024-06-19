const express = require('express')
const app = express()
const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/demo")
  .then(() => console.log("connected"))
  .catch(() => console.log("not connected"))

let port = 3000
app.listen(port, () => console.log("server is running"))
const userSchema = new mongoose.Schema(
  {
    name: String,
    age: Number
  }
)
const userModel = mongoose.model("student", userSchema)

app.get("/data",  function (res, req) {
  userModel.find({}).then((user)=>
{
  res.json(user)
}
  ).catch((error)=>console.error(error))
   
})




