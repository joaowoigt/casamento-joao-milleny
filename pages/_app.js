import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <style>{`
          * {
            color-scheme: light;
            background: #f7f0eb;
            color: black;
          }
        `}</style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
