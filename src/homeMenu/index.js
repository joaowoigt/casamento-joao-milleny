import menu from "../components/Menu.module.css"
import React, { useState } from "react"
import Link from "next/link"
import Head from "next/head"

export default function HomeMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div class={menu.topnav}>
      <Head></Head>
      <div className={menu.myLinksActive}>
        <Link href={"/"} className={menu.pages}>
          Sobre
        </Link>
        <Link href={"/lista"} className={menu.pages}>
          Lista de presentes
        </Link>
        <Link href={"/confirme-sua-presenca"} className={menu.pages}>
          Confirmar presença
        </Link>
      </div>
    </div>
  )
}
