import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import '@/styles/globals.css'
import Providers from '@/utils/providers'
import { Hydrate } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import Head from 'next/head'
import React, { useState } from 'react'

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
          <Header />
          <Component {...pageProps} />
          <Footer />
          <ReactQueryDevtools />
        </Hydrate>
      </Providers>
    </>
  )
}
