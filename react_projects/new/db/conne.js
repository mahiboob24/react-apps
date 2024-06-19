const mongoose  = require("mongoose")


mongoose.connect("mongodb://0.0.0.0:27017/somedata")
.then(()=>console.log("connected to mongoDB"))
.catch(()=>console.log("not connected"))

