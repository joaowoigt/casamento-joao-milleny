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
          <div className={containers.centerDiv}>
            <CursiveTitle>Lista de presentes</CursiveTitle>
          </div>
          <h3 className={fonts.quattrocentoRegular}>
            Para nosso casamento, ao inves de recebermos os presentes como o
            tradicional, gostariamos de facilitar para ambas as partes, por isso
            nossa lista de presente é apenas simbólica para que vocês possam nos
            dar qualquer valor e assim contribuir na realização dos nossos
            sonhos. Assim, a lista é uma referência do que pensamos em fazer com
            a sua contribuição. Desta forma, você pode escolher algum presente
            da lista e{" "}
            <b>
              clicar em comprar, você será redirecionado para uma pagina
              contendo as instruções!
            </b>
          </h3>
          <div className={containers.listGridItem}>
            <ListItem
              img="\images\whiskas.jpg"
              value="R$ 53,30"
              showValue={false}
            >
              Pacotes de Whiskas para nossos gatos
            </ListItem>
            <ListItem
              img="\images\rp.webp"
              value="R$ 100, 00"
              showValue={false}
            >
              Cartão pré-pago de RP para o João
            </ListItem>
            <ListItem
              img="\images\cobertor.jpg"
              value="R$ 159,00"
              showValue={false}
            >
              Cobertor dupla face
            </ListItem>
            <ListItem
              img="\images\passador.png"
              value="R$ 168,65"
              showValue={false}
            >
              Ferro a vapor
            </ListItem>
            <ListItem
              img="\images\cama.jpg"
              value="R$ 194,00"
              showValue={false}
            >
              Conjunto de cama branco INCRIVEL
            </ListItem>
            <ListItem
              img="\images\restaurante.jpg"
              value="R$ 200,00"
              showValue={true}
            >
              Jantar romantico na lua de mel
            </ListItem>
            <ListItem
              img="\images\pratos.png"
              value="R$ 227,52"
              showValue={false}
            >
              Kit de pratos de jantar
            </ListItem>
            <ListItem
              img="\images\jogodebanho.png"
              value="R$ 259,00"
              showValue={false}
            >
              Jogo de banho
            </ListItem>
            <ListItem
              img="\images\pillow.png"
              value="R$ 369,00"
              showValue={false}
            >
              PillowTop!!!!!
            </ListItem>
            <ListItem
              img="\images\esteto.webp"
              value="R$ 379,90"
              showValue={false}
            >
              Kit de cozinha super massa!
            </ListItem>
            <ListItem
              img="\images\arranhador.png"
              value="R$ 499,90"
              showValue={false}
            >
              Arranhador para gatos
            </ListItem>
            <ListItem
              img="\images\garfos.png"
              value="R$ 509,99"
              showValue={false}
            >
              Faqueiro lindo!
            </ListItem>
            <ListItem
              img="\images\mesa.png"
              value="R$ 599,00"
              showValue={false}
            >
              Mesa de jantar
            </ListItem>
            <ListItem
              img="\images\microondaspreto.png"
              value="R$ 619,90"
              showValue={false}
            >
              Microondas preto elengatérrimo
            </ListItem>
            <ListItem
              img="\images\louvre.jpg"
              value="R$ 1.000,00"
              showValue={true}
            >
              Passeios na lua de mel
            </ListItem>
            <ListItem
              img="\images\roboaspirador.png"
              value="R$ 1.289,90"
              showValue={false}
            >
              Robo aspirador inteligente de verdade
            </ListItem>
            <ListItem
              img="\images\frigobar.png"
              value="R$ 2.246,00"
              showValue={false}
            >
              Frigobar retro sonho de consumo!!!!!
            </ListItem>
            <ListItem
              img="\images\lava-loucas.webp"
              value="R$ 2.254,10"
              showValue={false}
            >
              Lava louças
            </ListItem>
            <ListItem
              img="\images\tv.jpg"
              value="R$ 3.499,00"
              showValue={false}
            >
              TV grande
            </ListItem>
            <ListItem
              img="\images\hotel.jpg"
              value="R$ 5.000,00"
              showValue={true}
            >
              Diária em hotel 5 estrelas para a lua de mel
            </ListItem>
            <ListItem
              img="\images\viagem.png"
              value="R$ 10.000,00"
              showValue={true}
            >
              Passagem para a lua de mel
            </ListItem>
          </div>
        </div>
      </div>
    </div>
  )
}
