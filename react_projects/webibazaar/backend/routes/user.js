const express = require("express");
const { signup,signin, sendotp,submitotp} = require("../controllers/user.js");
const router = express.Router();
const formidable=require("express-formidable")
// const verifyToken=require("../middlewares/authontication.js");

router.post('/signup', signup)
router.post('/signin', signin)
router.post('/submitotp', submitotp)
router.post('/sendotp', sendotp)

module.exports = router;