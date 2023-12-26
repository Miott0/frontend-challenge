'use client'

import Image from 'next/image'
import './page.module.css'
import { FilterBar } from '@/components/Header/filter-bar'
import styled from 'styled-components'

const MainContainer = styled.main`

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 34px 160px;
  min-height: 100vh;
`

export default function Home() {
  return (
    <MainContainer>
      <FilterBar/>
    </MainContainer>
  )
}
