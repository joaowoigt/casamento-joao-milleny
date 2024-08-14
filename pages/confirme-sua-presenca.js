import container from "../src/components/Container.module.css"
import styles from "../src/components/Form.module.css"
import React, { useState } from "react"
import HomeMenu from "../src/homeMenu"
import CursiveTitle from "../src/CursiveTitle"
import { RadioGroup, Radio } from "@nextui-org/radio"

export default function ListaPage() {
  const [name, setName] = useState("")
  const [errorName, setErrorName] = useState(false)
  const [email, setEmail] = useState("")
  const [errorEmail, setErrorEmail] = useState(false)
  const [isGoing, setIsGoing] = useState("Não")
  const [adultsGuests, setAdultsGuests] = useState("0")
  const [childreGuests, setChildrenGuests] = useState("0")
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

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Sending")
    if (name === "" || email === "") {
      setErrorName(name === "")
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

    let data = {
      name,
      email,
      isGoing,
      adultsGuests,
      childreGuests
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
      <div className={styles.mainContainer}>
        <HomeMenu></HomeMenu>
        <CursiveTitle>Confirmar presença</CursiveTitle>
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
            {errorName ? <h3>Seu nome é obrigatório</h3> : null}
          </formGroup>

          <formGroup className={styles.inputGroup}>
            <label htmlFor="email" className={styles.inputLabel}>
              Email:
            </label>
            <input
              type="text"
              name="email"
              className={styles.inputField}
              onChange={handleEmail}
            />
            {errorName ? <h3>Email é obrigatório</h3> : null}
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
              Quantas crianças (até 5 anos)?
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
          <br></br>
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
        </form>
      </div>
    </div>
  )
}
