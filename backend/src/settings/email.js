const nodemailer = require("nodemailer");
require('dotenv')
async function sendMail(id,email,enabled) {

  let transporter = nodemailer.createTransport({
    sendMail: true,
    host: process.env.HOST_EMAIL,
    path: process.env.PATH_EMAIL,
    secure: true,
    port: process.env.PORT_EMAIL ||465,
    auth: {
          user: process.env.USER_EMAIL,
          pass: process.env.PASSWORD_EMAIL
      },
  });
    
    let info = await transporter.sendMail({
    from: process.env.USER_EMAIL , 
    to: 'jorgezambranolr@gmail.com', 
      subject: "Email sent to my-app",
    html: {path:'./html/test.html' } 
    });
console.log('send ', email)
}

sendMail().catch(console.error);;

module.exports = {sendMail};