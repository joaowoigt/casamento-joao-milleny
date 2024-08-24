import HomeMenu from "../src/homeMenu"
import ListItem from "../src/listItem"
import containers from "../src/components/Container.module.css"
import fonts from "../src/components/Font.module.css"
import CursiveTitle from "../src/CursiveTitle"

export default function ListaPage() {
  return (
    <div>
      <HomeMenu></HomeMenu>
      <div className={containers.centerDiv}>
        <div className={containers.mainContainer}>
          <CursiveTitle>Lista de presentes</CursiveTitle>
          <h4 className={fonts.latoRegular}>
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
          </h4>
          <img
            className={containers.imgPixContainer}
            src="images\pix-qr-code.png"
          ></img>
          <div className={containers.listGridItem}>
            <ListItem img="\images\whiskas.jpg" value="R$ 50,00">
              Pacotes de Whiskas para nossos gatos
            </ListItem>
            <ListItem img="\images\rp.webp" value="R$ 100,00">
              Cartão pré-pago de RP para o João
            </ListItem>
            <ListItem img="\images\restaurante.jpg" value="R$ 200,00">
              Jantar romantico na lua de mel
            </ListItem>
            <ListItem img="\images\esteto.webp" value="R$ 300,00">
              Estetoscópio para a Dra. Milleny
            </ListItem>
            <ListItem img="\images\cama.jpg" value="R$ 400,00">
              Conjunto de cama branco INCRIVEL
            </ListItem>
            <ListItem img="\images\aspirador.webp" value="R$ 500,00">
              Aspirador de pó robo
            </ListItem>
            <ListItem img="\images\frigobar.png" value="R$ 1.000,00">
              Frigobar retro sonho de consumo!!!!!
            </ListItem>
            <ListItem img="\images\lava-loucas.webp" value="R$ 2.000,00">
              Lava louças
            </ListItem>
            <ListItem img="\images\lava-seca.webp" value="R$ 3.000,00">
              Maquina Lava e Seca
            </ListItem>
            <ListItem img="\images\tv.jpg" value="R$ 4.000,00">
              TV grande
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
