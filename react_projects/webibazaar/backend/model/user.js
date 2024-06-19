
const mongoose = require('mongoose');


module.exports = mongoose.model('newUser',
 { email: String, password: String, otp: Number });