'use client'
import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

type Props = {
  children: React.ReactNode
}

export default function ClientProvider({children}: Props) {
  
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}