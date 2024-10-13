import { NextUIProvider } from "@nextui-org/system"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <style>{`
          * {
            color-scheme: light;
            background: #f7f0eb;
            color: black;
          }
        `}</style>
        <Component {...pageProps} />
      </NextThemesProvider>
    </NextUIProvider>
  )
}

export default MyApp
