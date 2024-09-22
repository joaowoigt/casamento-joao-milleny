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

  let message = req.body.message
  let name = req.body.name
  let subject = `Mensagem de ${name}`

  let msg = `Seu convidado <b>${name}</b> acabou de enviar uma messagem:
  <br></br>

   ${message}
   `

  const mailData = {
    from: "wills030797@gmail.com",
    to: "joaowoigt@gmail.com",
    subject: subject,
    text: msg,
    html: msg
  }
  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info)
    }
  })
  console.log("body da api" + req.body.childrenMiddleGuests)
  res.status(200)
}
