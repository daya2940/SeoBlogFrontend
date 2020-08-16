import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"></link>
      </Head>
      </div>
      <Component {...pageProps}/>
    </div>
  )
}

export default MyApp