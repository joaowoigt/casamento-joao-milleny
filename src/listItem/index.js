import styles from "../components/ListItem.module.css"
import container from "../components/Container.module.css"
import fonts from "../components/Font.module.css"

export default function ListItem({ children, img, value }) {
  return (
    <div className={styles.itemContaier}>
      <img className={container.imgListContainer} src={img}></img>
      <h5 className={fonts.latoThin}>{children}</h5>
      <h4 className={fonts.latoBlack}>{value}</h4>
    </div>
  )
}
