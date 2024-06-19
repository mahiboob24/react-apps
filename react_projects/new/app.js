// app.js (assuming you're using Express)

const express = require('express');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const User = require('./model/data'); // Your User model file
require("./db/conne")
const app = express();



// Forgot Password Route
app.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(20).toString('hex');
    const resetExpires = Date.now() + 360000; // Token valid for 1 hour

    // Update user with reset token and expiration
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = resetExpires;
    await user.save();

    // Send reset password email
    const transporter = nodemailer.createTransport({
      // Configure your email service
      // Example using Gmail:
      service: 'Gmail',
      auth: {
        user: 'mahiboobbltg@gmail.com',
        pass: 'Mypassword@123'
      }
    });

    const mailOptions = {
      to: user.email,
      from: 'mahiboobbltg@gmail.com',
      subject: 'Password Reset',
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n` +
        `Please click on the following link, or paste this into your browser to complete the process:\n\n` +
        `http://localhost:3000/reset/${resetToken}\n\n` +
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
});

// ... (other routes)

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
