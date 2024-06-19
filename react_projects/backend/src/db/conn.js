const mongoose = require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/sunilkadata")
.then(() => { console.log("connection successful") })
    .catch(() => { console.log("not connected ") })



    