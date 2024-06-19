const mongoose = require('mongoose');

const stdSchema = new mongoose.Schema({
    firstName: { type: String, },
    lastName: { type: String, },
    email: { type: String, },
    password: { type: String, },
    token: { type: String, }
  });  

  
const Student=new mongoose.model("Student",stdSchema)

module.exports=Student

  