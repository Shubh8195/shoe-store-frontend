import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import '@/styles/globals.css'
import { Hydrate, QueryClient, QueryClientProvider, dehydrate } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Head from 'next/head'
import React from 'react'

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 60 * 5,
        staleTime: 1000 * 60 * 5,
      },
    },
  });

  return (
    <>
      <Head>
        <title>Online Shoe Store</title>
        <meta name="description" content="Online Shoe Store" />
        <meta name="viewport" content="initial-scale=1" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Header />
          <Component {...pageProps} />
          <Footer />
          <ReactQueryDevtools />
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}
