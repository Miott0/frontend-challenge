'use client'

import Image from 'next/image'
import './page.module.css'
import { FilterBar } from '@/components/Header/filter-bar'
import styled from 'styled-components'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ProductsList } from '@/components/Products/products-list'


const MainContainer = styled.main`

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 34px 160px;
  min-height: 100vh;
  background: var(--bg-primary);
`

export default function Home() {

  const client = new QueryClient()
  return (
    
    <QueryClientProvider client={ client }>
      <MainContainer>
        <FilterBar/>
        <ProductsList/>   
      </MainContainer>
    </QueryClientProvider>
    
  )
}
