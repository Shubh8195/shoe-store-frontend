import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Online Shoe Store</title>
        <meta name="description" content="Online Shoe Store" />
        <meta name="viewport" content="initial-scale=1" />
      </Head>

        <Header />
        <Component {...pageProps} />
        <Footer />

    </>
  )
}
