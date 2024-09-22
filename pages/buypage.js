import { useRouter } from "next/router"
import container from "../src/components/Container.module.css"
import fonts from "../src/components/Font.module.css"
import style from "../src/components/ListItem.module.css"
import formStyle from "../src/components/Form.module.css"
import HomeMenu from "../src/homeMenu"
import Head from "next/head"
import { Button } from "@nextui-org/button"
import React, { useState } from "react"

export default function BuyPage() {
  const router = useRouter()
  const product = router.query.name
  const pixCode = "VAMOS DIZER QUE ESSE É O CODIGO"
  const [copyButtonText, setCopyButtonText] = useState("Copiar codigo pix!")

  const [sendButtonText, setSendButtonText] = useState("Enviar")
  const [message, setMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState(false)
  const [name, setName] = useState("")
  const [errorName, setErrorName] = useState(false)

  const [submitted, setSubmitted] = useState(false)

  const copyPix = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(pixCode)
    setCopyButtonText("Codigo copiado!")
  }

  const handleMessage = (event) => {
    setMessage(event.target.value)
    setErrorMessage(false)
  }

  const handleName = (event) => {
    setName(event.target.value)
    setErrorName(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Sending")

    if (message === "" || name === "") {
      setErrorMessage(message === "")
      setErrorName(name === "")
      return
    }

    setSendButtonText("Obrigado por enviar sua mensagem")
    setSubmitted(true)

    let data = {
      name,
      message
    }

    fetch("/api/message", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log("Response received")
      if (res.status === 200) {
        console.log("Response Succeeded!")
      }
    })
  }

  return (
    <div className={container.centerDiv}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Quattrocento:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={container.mainContainer}>
        <HomeMenu></HomeMenu>
        <img
          className={container.imgListContainer}
          src={router.query.image}
        ></img>
        <h3 className={fonts.quattrocentoRegular}>
          É com muita alegria que nós, Milleny e João, anunciamos a nossa união
          eterna. <br></br>No dia{" "}
          <b>05 de Julho de 2025 às 15h30, no espaço Colibri em Limeira - SP</b>
          , diante de nossos amigos e familiares, gostariamos de celebrar o
          nosso amor. <br></br> Neste site você pode acessar nossa lista de
          presentes e o formulário de confirmação de presença.
        </h3>
        <Button onClick={copyPix} className={formStyle.buttonForm}>
          {copyButtonText}
        </Button>

        <h3>
          Quer nos enviar uma mensagem? Preencha os campos a seguir e clique no
          botão enviar
        </h3>

        <form>
          <formGroup className={formStyle.inputGroup}>
            <label htmlFor="name" className={formStyle.inputLabel}>
              Nome:
            </label>
            <input
              type="text"
              name="name"
              className={formStyle.inputField}
              onChange={handleName}
            />
            {errorName ? (
              <h3 className={formStyle.warning}>Seu nome é obrigatório</h3>
            ) : null}
          </formGroup>
          <formGroup className={formStyle.inputGroup}>
            <label htmlFor="name" className={formStyle.inputLabel}>
              Mensagem:
            </label>
            <textarea
              type="text"
              name="name"
              rows="10"
              onChange={handleMessage}
              className={formStyle.finishMessageBuyPage}
            />
          </formGroup>
          {errorMessage ? (
            <h3 className={formStyle.warning}>Sua mensagem é obrigatória</h3>
          ) : null}
        </form>
        <div className={formStyle.centerButton}>
          {submitted ? (
            <p className={formStyle.finishMessage}>
              Obrigado por enviar sua mensagem!
            </p>
          ) : (
            <input
              className={formStyle.buttonForm}
              type="submit"
              value={sendButtonText}
              onClick={handleSubmit}
            />
          )}
        </div>
      </div>
    </div>
  )
}
