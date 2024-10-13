import Head from "next/head"
import CursiveTitle from "../src/CursiveTitle"
import HomeMenu from "../src/homeMenu"
import container from "../src/components/Container.module.css"
import fonts from "../src/components/Font.module.css"

export default function HomePage() {
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
        <div className={container.centerDiv}>
          <CursiveTitle>João & Milleny</CursiveTitle>
        </div>
        <img
          className={container.imgContainer}
          src="images\foto-nossa.jpg"
        ></img>
        <h3 className={fonts.quattrocentoRegular}>
          É com muita alegria que nós, Milleny e João, anunciamos a nossa união
          eterna. <br></br>No dia{" "}
          <b>05 de Julho de 2025 às 15h30, no espaço Colibri em Limeira - SP</b>
          , diante de nossos amigos e familiares, gostariamos de celebrar o
          nosso amor. <br></br> Neste site você pode acessar nossa lista de
          presentes e o formulário de confirmação de presença.
        </h3>
        <h4 className={fonts.quattrocentoRegular}>
          Qualquer duvida você pode nos contatar nos telefones:<br></br>
          <a href="https://wa.me/19988260505">
            <b>João: (19) 98826-0505</b>
          </a>
          <br></br>
          <a href="https://wa.me/19971316619">
            <b>Milleny: (19) 97131-6619</b>
          </a>
          <br></br>
          <br></br>
          Endereço da festa:
          <br></br>
          <b>
            Rua Servidão 1, 299-627 - Parque das Nações, Limeira - SP, 13480-970
          </b>
          <br></br>
          Ou acesse a localização{" "}
          <b>
            <a href="https://www.google.com/maps/place/Espa%C3%A7o+Colibri/@-22.5869195,-47.4192071,16z/data=!4m10!1m2!2m1!1sColibri+limeira!3m6!1s0x94c881aa7137088f:0x2510e69c03cf6091!8m2!3d-22.5869195!4d-47.4101949!15sCg9Db2xpYnJpIGxpbWVpcmGSAQ13ZWRkaW5nX3ZlbnVl4AEA!16s%2Fg%2F11g6rl0k7z?entry=ttu">
              clicando aqui
            </a>
          </b>
        </h4>
      </div>
    </div>
  )
}
