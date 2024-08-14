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
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Playwrite+CU:wght@100..400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={container.mainContainer}>
        <HomeMenu></HomeMenu>
        <CursiveTitle>João & Milleny</CursiveTitle>
        <img className={container.imgContainer} src="images\header.jpeg"></img>
        <h4 className={fonts.latoRegular}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus
          nulla, congue eget vulputate ut, sollicitudin vitae sem. Integer
          ultricies volutpat tortor, ac imperdiet orci hendrerit ac. Sed feugiat
          vitae neque vitae feugiat. Sed arcu nunc, varius sit amet mauris non,
          efficitur ornare libero. Duis at quam a erat hendrerit lobortis nec ac
          lacus. Cras elementum auctor consequat. Aliquam eleifend nulla at
          sodales molestie.{" "}
        </h4>
      </div>
    </div>
  )
}
