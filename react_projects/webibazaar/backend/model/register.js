const mongoose = require("mongoose")

const registerSchema = mongoose.Schema({

    userId: {
        type: String,
        unique: true,
    },
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    password: {
        type: String,
    },
    token: {
        type: String,
    },
    resetPasswordToken: String,
  resetPasswordExpires: Date,
})

const register = mongoose.model("registerdata", registerSchema)
module.exports = register




