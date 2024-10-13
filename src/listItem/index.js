import styles from "../components/ListItem.module.css"
import container from "../components/Container.module.css"
import fonts from "../components/Font.module.css"
import Head from "next/head"
import Link from "next/link"

export default function ListItem({ children, img, value, showValue }) {
  return (
    <div className={styles.itemContaier}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Quattrocento:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <img className={container.imgListContainer} src={img}></img>
      <h3 className={fonts.quattrocentoBoldGifts}>{children}</h3>
      {showValue ? (
        <h3 className={fonts.quattrocentoBoldGiftsValue}>{value}</h3>
      ) : null}
      <Link
        href={{
          pathname: "/buypage",
          query: {
            image: img,
            value: value,
            name: children
          }
        }}
        className={styles.buttonStyle}
      >
        Comprar
      </Link>
    </div>
  )
}
