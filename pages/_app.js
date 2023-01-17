import '@/styles/globals.scss'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>From _app.js</title>
      </Head>
    <Component {...pageProps} />
    </>
  )
}
