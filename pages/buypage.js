import { useRouter } from "next/router"
import container from "../src/components/Container.module.css"
import fonts from "../src/components/Font.module.css"
import style from "../src/components/ListItem.module.css"
import { Button } from "@nextui-org/button"
import React, { useState } from "react"

export default function BuyPage() {
  const router = useRouter()
  const product = router.query.name
  const pixCode = "VAMOS DIZER QUE ESSE É O CODIGO"
  const [buttonText, setButtonText] = useState("Copiar codigo pix!")

  const copyPix = (e) => {
    navigator.clipboard.writeText(pixCode)
    setButtonText("Codigo copiado!")
  }

  return (
    <div className={container.centerDiv}>
      <div className={container.mainContainer}>
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
        <Button onClick={copyPix} className={style.buttonStyle}>
          {buttonText}
        </Button>
      </div>
    </div>
  )
}
