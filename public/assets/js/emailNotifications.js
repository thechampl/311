'use strict';
const nodemailer = require("nodemailer");
var smtpTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "311Sender@gmail.com",
    pass: "rootroot"
  }
});
var mailOptions = {
  from: "Node Server<311Sender@gmail.com",
  to: "akharri8@ncsu.edu",
  subject: "Hello",
  html: `
    <h1>Hello {User}</h1>
    <p>We have successfully resolved the {thing} at {address}</p>
    <p>Image here</p>
    <p>Signature message</p>
    `
}
// Send Email
smtpTransport.sendMail(mailOptions, (error, response) => {
  // DO SOMETHING
});