import Head from "next/head"
import styles from "../components/Font.module.css"

export default function CursiveTitle({ children }) {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playwrite+DK+Uloopet:wght@100..400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <h1 className={styles.cursive}>{children}</h1>
    </div>
  )
}
