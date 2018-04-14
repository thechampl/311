'use strict';
const nodemailer = require("nodemailer");
// const image = require("/assets/img/simpl311.png");

const Module = require('module');
const fs     = require('fs');

// Module._extensions['.png'] = function(module, fn) {
//   const base64 = fs.readFileSync(fn).toString('base64');
//   module._compile('module.exports="data:image/png;base64,' + base64 + '"', fn);
// };

// var img = require("fs").readFileSync("");

// var image = require("../img/simpl311.png");

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