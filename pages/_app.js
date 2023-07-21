import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import '@/styles/globals.css'
import Providers from '@/utils/providers'
import { Hydrate } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import Head from 'next/head'
import React, { useEffect } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '@/store/store'
import { ToastContainer } from 'react-toastify'

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Online Shoe Store</title>
        <meta name="description" content="Online Shoe Store" />
        <meta name="viewport" content="initial-scale=1" />
      </Head>
      <Providers >
        <Hydrate state={pageProps.dehydratedState}>
          <ReduxProvider store={store}>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <ToastContainer
              position="bottom-right"
              theme="dark"
            />
          </ReduxProvider>
          <ReactQueryDevtools />
        </Hydrate>
      </Providers>
    </>
  )
}
