import container from "../src/components/Container.module.css"
import styles from "../src/components/Form.module.css"
import React, { useState } from "react"
import HomeMenu from "../src/homeMenu"
import CursiveTitle from "../src/CursiveTitle"

export default function ListaPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isGoing, setIsGoing] = useState("Não")
  const [adultsGuests, setAdultsGuests] = useState("0")
  const [childreGuests, setChildrenGuests] = useState("0")
  const [submitted, setSubmitted] = useState(false)

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
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
    <div className={container.mainContainer}>
      <HomeMenu></HomeMenu>
      <CursiveTitle>Confirmar presença</CursiveTitle>
      <form>
        <formGroup className={styles.inputGroup}>
          <label htmlFor="name" className={styles.inputLabel}>
            Nome
          </label>
          <input
            type="text"
            name="name"
            className={styles.inputField}
            onChange={handleName}
          />
        </formGroup>

        <formGroup className={styles.inputGroup}>
          <label htmlFor="email" className={styles.inputField}>
            Email
          </label>
          <input
            type="text"
            name="email"
            className={styles.inputField}
            onChange={handleEmail}
          />
        </formGroup>

        <formGroup className={styles.inputGroup}>
          <p>Você irá ao evento?</p>
          <label htmlFor="going">Sim</label>
          <input
            type="radio"
            id="going"
            name="confirm-presence"
            value="Sim"
            checked={isGoing === "Sim"}
            onChange={handleIsGoing}
          />
          <label htmlFor="not-going">Não</label>
          <input
            type="radio"
            id="not-going"
            name="confirm-presence"
            value="Não"
            checked={isGoing === "Não"}
            onChange={handleIsGoing}
          />
        </formGroup>

        <formGroup>
          <label htmlFor="adults">Quantos adultos?</label>
          <select
            value={adultsGuests}
            onChange={handleAdultsGuests}
            name="adults"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </formGroup>
        <br></br>
        <formGroup>
          <label htmlFor="childrens">Quantas crianças (até 5 anos)?</label>
          <select
            value={childreGuests}
            onChange={handleChildrenGuests}
            name="childrens"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </formGroup>
        <br></br>
        <input
          type="submit"
          value="Confirme sua presença"
          onClick={(event) => {
            handleSubmit(event)
          }}
        />
      </form>
    </div>
  )
}
