export default function (req, res) {
  let nodemailer = require("nodemailer")
  require("dotenv").config
  const PASSWORD = process.env.password
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "wills030797@gmail.com",
      pass: PASSWORD
    },
    secure: true
  })
  const mailData = {
    from: "wills030797@gmail.com",
    to: "joaowoigt@gmail.com",
    subject: `Confirmação de ${req.body.name}`,
    text: req.body.name,
    html: `<div>{req.body.name}</div>`
  }
  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info)
    }
  })
  console.log(req.body)
  res.status(200)
}
