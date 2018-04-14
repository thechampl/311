'use strict';
const nodemailer = require("nodemailer");

module.exports = function (email, user, ticket) {  
  const smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "311Sender@gmail.com",
      pass: "rootroot"
    }
  });
  const mailOptions = {
    from: "311 Tech Team<311Sender@gmail.com",
    to: email,
    subject: "311 Ticket Resolved",
    html: `
      <h1>Hello ${user}</h1>
      <p>We have successfully resolved your ticket request</p>
      <h3>${ticket}</h3>
      <p>- 311 Adminstration</p>
      `
  }
  // Send Email
  smtpTransport.sendMail(mailOptions, (error, response) => {
    // DO SOMETHING
  });
}