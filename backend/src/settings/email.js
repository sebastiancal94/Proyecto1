const nodemailer = require("nodemailer");
const { config } = require('./config.env');
const { hello } = require("./templates/email.template");

async function sendMail(id,email,enabled) {

  let transporter = nodemailer.createTransport({
    sendMail: true,
    host: config.HOST,
    path: config.PATH,
    secure: true,
    port: config.PORT2,
    auth: {
      user: config.EMAIL,
      pass: config.PASSWORD,
      },
  });
  for (let i = 0; i < email.length; i++) {
       let info = await transporter.sendMail({
    from: config.EMAIL ,
    to: email2[i],
      subject: "Email sent to my-app",
      html:`index.=>${i}`,
    });
    
  }

  console.log('send ', config.HOST, config.PATH, config.PORT, config.USER, config.PASSWORD)
}

sendMail().catch(console.error);;

module.exports = {sendMail};