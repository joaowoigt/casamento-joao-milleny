function MyApp({ Component, pageProps }) {
  return (
    <>
      <style>{`
          * {
            background: #FEE5D3;
            color: black;
          }
        `}</style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
