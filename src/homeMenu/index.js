import menu from "../components/Menu.module.css"
import React, { useState } from "react"
import Link from "next/link"
import Head from "next/head"
import { useRouter } from "next/navigation"

export default function HomeMenu() {
  const router = useRouter()

  return (
    <div class={menu.topnav}>
      <Head></Head>
      <div className={menu.myLinksActive}>
        <img
          className={menu.back}
          src="back.png"
          onClick={() => router.back()}
        ></img>
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
