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
  from: "Node Server  <311Sender@gmail.com", // sender address
  to: "akharri8@ncsu.edu", // list of receivers
  subject: "Hello", // Subject line
  html: `<h1>Hello {User}</h1>
        <p>We have successfully resolved the {thing} at {address}</p>
        <p>Image here</p>
        <p>Signature message</p>
  `
}

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
  if(error){
      console.log(error);
  }else{
      console.log("Message sent: " + response.message);
  }

});