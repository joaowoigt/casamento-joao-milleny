import container from "../src/components/Container.module.css"
import styles from "../src/components/Form.module.css"
import font from "../src/components/Font.module.css"
import React, { useState } from "react"
import HomeMenu from "../src/homeMenu"
import Head from "next/head"
import CursiveTitle from "../src/CursiveTitle"

export default function ListaPage() {
  const [name, setName] = useState("")
  const [errorName, setErrorName] = useState(false)
  const [email, setEmail] = useState("")
  const [errorEmail, setErrorEmail] = useState(false)
  const [isGoing, setIsGoing] = useState("Não")
  const [adultsGuests, setAdultsGuests] = useState("0")
  const [childreGuests, setChildrenGuests] = useState("0")
  const [childreMiddleGuests, setChildrenMiddleGuests] = useState("0")
  const [buttonText, setButtonText] = useState("Confirme sua presença")
  const [submitted, setSubmitted] = useState(false)

  const handleName = (event) => {
    setName(event.target.value)
    setErrorName(false)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
    setErrorEmail(false)
  }

  const handleIsGoing = (event) => {
    setIsGoing(event.target.value)
  }

  const handleAdultsGuests = (event) => {
    setAdultsGuests(event.target.value)
  }

  const handleChildrenGuests = (event) => {
    setChildrenGuests(event.target.value)
  }

  const handleChildrenMiddleGuests = (event) => {
    setChildrenMiddleGuests(event.target.value)
    console.log(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Sending")
    if (name === "") {
      setErrorName(name === "")
      return
    }

    if (email === "") {
      setErrorEmail(email === "")
      return
    }

    setButtonText("Obrigado por confirmar sua presença!")
    setSubmitted(true)
    setName("")
    setEmail("")
    setIsGoing("Não")
    setAdultsGuests("0")
    setChildrenGuests("0")
    setChildrenMiddleGuests("0")

    let data = {
      name,
      email,
      isGoing,
      adultsGuests,
      childreGuests,
      childreMiddleGuests
    }

    fetch("/api/contact", {
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
        setName("")
        setEmail("")
        setIsGoing("Não")
        setAdultsGuests("0")
        setChildrenGuests("0")
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
      <div className={styles.mainContainer}>
        <HomeMenu></HomeMenu>
        <CursiveTitle>Confirmar presença</CursiveTitle>
        <h3 className={font.quattrocentoRegular}>
          Para confirmar sua presença, é necessário{" "}
          <b>preencher o formulario</b> abaixo. Indique quantos adultos
          (contando com você) e crianças irão a festa.
          <br></br> Se não for ao evento, também é necessário informar pelo
          formulário.
          <br></br>Caso prefira, você também pode confirmar a sua presença nos
          enviando mensagem no Whatsapp:{" "}
          <a href="https://wa.me/19988260505">(19) 98826-0505 (João)</a> ou{" "}
          <a href="https/wa.me/19971316619">(19) 97131-6619 (Milleny).</a>
        </h3>
        <form>
          <formGroup className={styles.inputGroup}>
            <label htmlFor="name" className={styles.inputLabel}>
              Nome:
            </label>
            <input
              type="text"
              name="name"
              className={styles.inputField}
              onChange={handleName}
            />
            {errorName ? (
              <h3 className={styles.warning}>Seu nome é obrigatório</h3>
            ) : null}
          </formGroup>

          <formGroup className={styles.inputGroup}>
            <label htmlFor="phone" className={styles.inputLabel}>
              Telefone:
            </label>
            <input
              type="text"
              name="phone"
              className={styles.inputField}
              onChange={handleEmail}
            />
            {errorEmail ? (
              <h3 className={styles.warning}>Seu Telefone é obrigatório</h3>
            ) : null}
          </formGroup>
          <formGroup className={styles.inputGroup}>
            <p className={styles.inputLabel}>Você irá ao evento?</p>
            <label htmlFor="going" className={styles.radioLabels}>
              Sim
            </label>
            <input
              type="radio"
              id="going"
              name="confirm-presence"
              value="Sim"
              className={styles.radioButton}
              checked={isGoing === "Sim"}
              onChange={handleIsGoing}
            />
            <label htmlFor="not-going" className={styles.radioLabels}>
              Não
            </label>
            <input
              type="radio"
              id="not-going"
              name="confirm-presence"
              value="Não"
              className={styles.radioButton}
              checked={isGoing === "Não"}
              onChange={handleIsGoing}
            />
          </formGroup>

          <formGroup>
            <label htmlFor="adults" className={styles.inputLabel}>
              Quantos adultos?
            </label>
            <select
              className={styles.dropdown}
              value={adultsGuests}
              onChange={handleAdultsGuests}
              name="adults"
            >
              <option value="0" className={styles.dropdownContent}>
                0
              </option>
              <option value="1" className={styles.dropdownContent}>
                1
              </option>
              <option value="2" className={styles.dropdownContent}>
                2
              </option>
              <option value="3" className={styles.dropdownContent}>
                3
              </option>
              <option value="4" className={styles.dropdownContent}>
                4
              </option>
              <option value="5" className={styles.dropdownContent}>
                5
              </option>
              <option value="6" className={styles.dropdownContent}>
                6
              </option>
              <option value="7" className={styles.dropdownContent}>
                7
              </option>
              <option value="8" className={styles.dropdownContent}>
                8
              </option>
              <option value="9" className={styles.dropdownContent}>
                9
              </option>
              <option value="10" className={styles.dropdownContent}>
                10
              </option>
            </select>
          </formGroup>
          <br></br>
          <formGroup>
            <label htmlFor="childrens" className={styles.inputLabel}>
              Quantas crianças (até 4 anos)?
            </label>
            <select
              className={styles.dropdown}
              value={childreGuests}
              onChange={handleChildrenGuests}
              name="childrens"
            >
              <option value="0" className={styles.dropdownContent}>
                0
              </option>
              <option value="1" className={styles.dropdownContent}>
                1
              </option>
              <option value="2" className={styles.dropdownContent}>
                2
              </option>
              <option value="3" className={styles.dropdownContent}>
                3
              </option>
              <option value="4" className={styles.dropdownContent}>
                4
              </option>
              <option value="5" className={styles.dropdownContent}>
                5
              </option>
              <option value="6" className={styles.dropdownContent}>
                6
              </option>
              <option value="7" className={styles.dropdownContent}>
                7
              </option>
              <option value="8" className={styles.dropdownContent}>
                8
              </option>
              <option value="9" className={styles.dropdownContent}>
                9
              </option>
              <option value="10" className={styles.dropdownContent}>
                10
              </option>
            </select>
          </formGroup>
          <formGroup>
            <label htmlFor="childrensMiddle" className={styles.inputLabel}>
              Quantas crianças (de 5 a 9 anos)?
            </label>
            <select
              className={styles.dropdown}
              value={childreMiddleGuests}
              onChange={handleChildrenMiddleGuests}
              name="childrensMiddle"
            >
              <option value="0" className={styles.dropdownContent}>
                0
              </option>
              <option value="1" className={styles.dropdownContent}>
                1
              </option>
              <option value="2" className={styles.dropdownContent}>
                2
              </option>
              <option value="3" className={styles.dropdownContent}>
                3
              </option>
              <option value="4" className={styles.dropdownContent}>
                4
              </option>
              <option value="5" className={styles.dropdownContent}>
                5
              </option>
              <option value="6" className={styles.dropdownContent}>
                6
              </option>
              <option value="7" className={styles.dropdownContent}>
                7
              </option>
              <option value="8" className={styles.dropdownContent}>
                8
              </option>
              <option value="9" className={styles.dropdownContent}>
                9
              </option>
              <option value="10" className={styles.dropdownContent}>
                10
              </option>
            </select>
          </formGroup>
          <br></br>
          <div className={styles.centerButton}>
            {submitted ? (
              <p className={styles.finishMessage}>
                Obrigado por confirmar sua presença!
              </p>
            ) : (
              <input
                className={styles.buttonForm}
                type="submit"
                value={buttonText}
                onClick={(event) => {
                  handleSubmit(event)
                }}
              />
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
