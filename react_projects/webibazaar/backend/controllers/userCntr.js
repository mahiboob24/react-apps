
const reg = require("../model/register")
const bcrypt = require("bcrypt")
const crypto = require("crypto")
const nodemailer = require("nodemailer")
const jwt = require("jsonwebtoken")

const createUser=async function (req, res) {
    let { userId, firstname, lastname, email, phone, password } = req.fields
    if (!(userId && firstname && lastname && email && phone && password )) {
      res.status(400).send("check your  inputs!!")
    }
    else {
      if (await reg.findOne({ email })) {
        res.status(400).send("user already exists!!!")
  
      } else {
  
        const enccryptpassword = await bcrypt.hash(req.fields.password, 10)
        const dataobj = await reg.create({
          userId: req.fields.userId,
          firstname: req.fields.firstname,
          lastname: req.fields.lastname,
          email: req.fields.email,
          phone: req.fields.phone,
        
          password: enccryptpassword
        })
  
        let usertoken = jwt.sign({ email }, process.env.Tokenkey, { expiresIn: "2hr" })
        dataobj.token = usertoken
  
        res.status(200).send("database is created " + " " + dataobj)
      }
    }
  }



const loginHomepage=async function (req, res) {
    let { email, password } = req.fields
    if (!(email && password)) {
      res.status(400).send('Provide all the inputs')
    }
    else {
      let user = await reg.findOne({ email })
      if (user && (await bcrypt.compare(password, user.password))) {
        let usetoken = jwt.sign({ email }, process.env.Tokenkey, { expiresIn: "2hr" })
        user.token = usetoken
        res.json(user)
      }
      else {
        res.status(403).send('Incorrect username or password!!')
      }
    }
  }


// Forgot Password 
const forgotPassword=  async function (req, res) {
    try {
      const email = req.fields.email;
  
      const user = await reg.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      console.log('token')
  
      // Generate random reset token for user
      const token = crypto.randomBytes(20).toString('hex');
      console.log(token)
      const resetExpires = Date.now() + 100*60*60;
      console.log(resetExpires)
  
      // Update user with reset token and expiration
      user.resetPasswordToken = token;
      user.resetPasswordExpires = resetExpires;
      await user.save();
  
      // Send reset password email for user
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        auth: {
          user: 'mahiboobbltg@gmail.com',
          pass: 'hqcjopsdscewtfqn'
        }
      });
  
      const mailOptions = {
        to: user.email,
        from: 'mahiboobbltg@gmail.com',
        subject: 'Password Reset',
        text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n` +
          `Please click on the following link, or paste this into your browser to complete the process:\n\n` +
          `http://localhost:3000/reset/${token}\n\n` +
          `If you did not request this, please ignore this email and your password will remain unchanged.\n`
      };
  
      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          console.error('Error sending email:', error);
          return res.status(500).json({ message: 'Error sending email' });
        }
        res.status(200).json({ message: 'Email sent successfully' });
      });
  
    } catch (err) {
      console.error('Error in forgot password:', err);
      res.status(500).json({ message: 'Server Error' });
    }
  }
  
  
  
  //  handle password reset link clicks
  const checktoken= async (req, res) => {
    try {
      const { token } = req.params;
  
      // Find user by reset token and check if it's valid and not expired
      const user = await reg.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: { $gt: Date.now() }
      });
  
      if (!user) {
        return res.status(400).json({ message: 'Password reset link is invalid or expired please check again' });
      }
  
      //  password reset 
      res.send("this is a token of resetpassword" + " " + token); 
  
    } catch (err) {
      console.error('Error in password reset:', err);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  //  handle a new password after reset
  const handlePassword=  async (req, res) => {
    try {
      const { token } = req.params;
      const { password } = req.fields;
  
      // Find user by reset token
      const user = await reg.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: { $gt: Date.now() }
      });
  
      if (!user) {
        return res.status(400).json({ message: 'Password reset link is invalid or expired' });
      }
  
      // Set the new password and clear token-related fields
      const enccryptpassword = await bcrypt.hash(password, 10)
      user.password = enccryptpassword;
      user.resetPasswordToken = undefined; // Clear/reset the token; you might consider removing it from the user object entirely if needed
      user.resetPasswordExpires = undefined; // Clear/reset the expiration
      await user.save();
  
      res.status(200).json({ message: 'Password reset successful' });
  
    } catch (err) {
      console.error('Error in resetting password:', err);
      res.status(500).json({ message: 'Server Error' });
    }
  }
  




module.exports={createUser,loginHomepage,forgotPassword,handlePassword,checktoken}

  