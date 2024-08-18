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
            Sinta-se a vontade para contribuir como puder.
          </h4>
          <img
            className={containers.imgPixContainer}
            src="images\pix-qr-code.png"
          ></img>
          <div className={containers.listGridItem}>
            <ListItem img="\images\avatar.jpg" value="R$ 50,00">
              Whiskas para nossos gatos
            </ListItem>
            <ListItem img="\images\avatar.jpg" value="R$ 1000,00">
              Texto de descrição do presente
            </ListItem>
            <ListItem img="\images\avatar.jpg" value="R$ 1000,00">
              Texto de descrição do presente
            </ListItem>
            <ListItem img="\images\avatar.jpg" value="R$ 1000,00">
              Texto de descrição do presente
            </ListItem>
            <ListItem img="\images\avatar.jpg" value="R$ 1000,00">
              Texto de descrição do presente
            </ListItem>
            <ListItem img="\images\avatar.jpg" value="R$ 10.000,00">
              Viagem pra Paris
            </ListItem>
          </div>
        </div>
      </div>
    </div>
  )
}
