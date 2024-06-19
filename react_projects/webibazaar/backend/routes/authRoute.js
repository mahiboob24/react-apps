const express = require("express")

const { createUser, loginHomepage, forgotPassword, handlePassword, checktoken } = require('../controllers/userCntr')
const formidable = require("express-formidable")

const router = express.Router()
const verifyToken = require("../middleaware/authent")

router.post('/register', formidable(), createUser)
router.post('/login', formidable(), loginHomepage)




router.get("/profile", verifyToken, function (req, res) {
  res.send("welcome to home page")
})

router.post('/forgotPassword', formidable(), forgotPassword)
router.get('/checktoken', formidable(), checktoken)
router.post('/handlepassword', formidable(), handlePassword)


module.exports = router
