import HomeMenu from "../src/homeMenu"
import ListItem from "../src/listItem"
import containers from "../src/components/Container.module.css"
import fonts from "../src/components/Font.module.css"
import CursiveTitle from "../src/CursiveTitle"
import Head from "next/head"

export default function ListaPage() {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Quattrocento:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={containers.centerDiv}>
        <div className={containers.mainContainer}>
          <HomeMenu></HomeMenu>
          <CursiveTitle>Lista de presentes</CursiveTitle>
          <h3 className={fonts.quattrocentoRegular}>
            Para nosso casamento, ao inves de recebermos os presentes como o
            tradicional, gostariamos de facilitar para ambas as partes, por isso
            nossa lista de presente é apenas simbólica para que vocês possam nos
            dar qualquer valor e assim contribuir na realização dos nossos
            sonhos. Assim, a lista é uma referência do que pensamos em fazer com
            a sua contribuição.
            <br></br>Abaixo{" "}
            <b>você encontra o QRcode para realizar o pix para nossa conta.</b>{" "}
            Desta forma, você pode escolher algum presente da lista abaixo e
            mandar o pix referente ao valor, ou sinta-se a vontade para
            contribuir como puder.
          </h3>
          <img
            className={containers.imgPixContainer}
            src="images\pix-qr-code.png"
          ></img>
          <div className={containers.listGridItem}>
            <ListItem img="\images\whiskas.jpg" value="">
              Pacotes de Whiskas para nossos gatos
            </ListItem>
            <ListItem img="\images\rp.webp" value="">
              Cartão pré-pago de RP para o João
            </ListItem>
            <ListItem img="\images\cobertor.jpg" value="">
              Cobertor dupla face
            </ListItem>

            <ListItem img="\images\pratos.jpg" value="">
              Kit de pratos de jantar
            </ListItem>

            <ListItem img="\images\cama.jpg" value="">
              Conjunto de cama branco INCRIVEL
            </ListItem>

            <ListItem img="\images\restaurante.jpg" value="R$ 200,00">
              Jantar romantico na lua de mel
            </ListItem>
            <ListItem img="\images\esteto.webp" value="">
              Kit de cozinha super massa!
            </ListItem>
            <ListItem img="\images\aspirador.webp" value="">
              Aspirador de pó robo
            </ListItem>
            <ListItem img="\images\louvre.jpg" value="R$ 1.000,00">
              Passeios na lua de mel
            </ListItem>
            <ListItem img="\images\frigobar.png" value="">
              Frigobar retro sonho de consumo!!!!!
            </ListItem>
            <ListItem img="\images\lava-loucas.webp" value="">
              Lava louças
            </ListItem>
            <ListItem img="\images\tv.jpg" value="">
              TV grande
            </ListItem>
            <ListItem img="\images\lava-seca.webp" value="">
              Maquina Lava e Seca
            </ListItem>
            <ListItem img="\images\hotel.jpg" value="R$ 5.000,00">
              Diária em hotel 5 estrelas para a lua de mel
            </ListItem>
            <ListItem img="\images\viagem.png" value="R$ 10.000,00">
              Passagem para a lua de mel
            </ListItem>
          </div>
        </div>
      </div>
    </div>
  )
}
