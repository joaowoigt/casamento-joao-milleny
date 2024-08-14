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
          <h3 className={fonts.latoThinJustify}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus
            nulla, congue eget vulputate ut, sollicitudin vitae sem. Integer
            ultricies volutpat tortor, ac imperdiet orci hendrerit ac. Sed
            feugiat vitae neque vitae feugiat. Sed arcu nunc, varius sit amet
            mauris non, efficitur ornare libero. Duis at quam a erat hendrerit
            lobortis nec ac lacus. Cras elementum auctor consequat. Aliquam
            eleifend nulla at
          </h3>
          <img
            className={containers.imgContainer}
            src="images\header.jpeg"
          ></img>
          <div className={containers.listGridItem}>
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
            <ListItem img="\images\avatar.jpg" value="R$ 1000,00">
              Texto de descrição do presente
            </ListItem>
            <ListItem img="\images\avatar.jpg" value="R$ 1000,00">
              Texto de descrição do presente
            </ListItem>
          </div>
        </div>
      </div>
    </div>
  )
}
