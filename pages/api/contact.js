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

  let name = req.body.name
  let email = req.body.email
  let isGoing = req.body.isGoing
  let adultsGuests = req.body.adultsGuests
  let childreGuests = req.body.childreGuests
  let subject = `Confirmação de ${name}`
  let infos = `
    <b>Nome: </b> ${name}<br>
    <b>Email: </b> ${email}<br>
    <b>Quantidade de adultos: </b>${adultsGuests}<br>
    <b>Quantidade de crianças: </b> ${childreGuests}<br>
  `
  let msg = `Seu convidado <b>${name}</b> (${email}) acabou de confirmar que
   ${isGoing === "Sim" ? "irá" : "não irá"} ao seu casamento<br><br>
   ${isGoing === "Sim" ? infos : "Que peninha!"}
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
  console.log("body da api" + req.body.name)
  res.status(200)
}
