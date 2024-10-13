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
  let childrenMiddleGuests = req.body.childreMiddleGuests
  let subject = `Confirmação de ${name}`
  let infos = `
    <b>Nome: </b> ${name}<br>
    <b>Email: </b> ${email}<br>
    <b>Quantidade de adultos: </b>${adultsGuests}<br>
    <b>Quantidade de crianças até 4 anos: </b> ${childreGuests}<br>
    <b>Quantidade de crianças de 5 a 9 anos: </b> ${childrenMiddleGuests}<br>
  `
  let msg = `Seu convidado <b>${name}</b> (${email}) acabou de confirmar que
   ${isGoing === "Sim" ? "irá" : "não irá"} ao seu casamento<br><br>
   ${isGoing === "Sim" ? infos : "Que peninha!"}
   `
  const mailList = ["joaowoigt@gmail.com", "fonsecagmilleny@gmail.com"]
  const mailData = {
    from: "wills030797@gmail.com",
    to: mailList,
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
