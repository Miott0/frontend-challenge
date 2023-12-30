'use client'

import { FilterBar } from '@/components/Header/filter-bar'
import styled from 'styled-components'
import { ProductsList } from '@/components/Products/products-list'


const MainContainer = styled.main`

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
  min-height: 100vh;
  background: var(--bg-primary);

  @media(min-width: ${props => props.theme.desktopBreakpoint}){
    padding: 34px 160px;
  }
`

export default function Home() {
  return (
    <MainContainer>
      <FilterBar/>
      <ProductsList/>   
    </MainContainer>
  )
}
