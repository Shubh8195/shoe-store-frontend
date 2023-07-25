// app/providers.jsx
// 'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React ,{ useState }  from 'react'

export default function Providers({ pageProps, children }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
      },
    },
  }))

  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}