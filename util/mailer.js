const nodemailer = require("nodemailer");

exports.transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2f2dece17fac9a",
    pass: "0e223d5c5b6349",
  },
});
