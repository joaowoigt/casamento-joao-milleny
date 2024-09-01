import Head from "next/head"
import styles from "../components/Font.module.css"

export default function CursiveTitlePresence({ children }) {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <h1 className={styles.cursivePresence}>{children}</h1>
    </div>
  )
}
