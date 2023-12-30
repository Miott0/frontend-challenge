'use client'

import { FilterContextProvider } from "@/contexts/filter-context"
import { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ThemeProvider } from "styled-components"

interface DefaulProviderProps{
    children: ReactNode
}

const theme = {
    desktopBreakpoint: "1068px"
}

export function DefaulProvider({ children }:DefaulProviderProps){
    
    const client = new QueryClient()
    
    return(
        
        <QueryClientProvider client={client}>
            <FilterContextProvider>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </FilterContextProvider>
        </QueryClientProvider>
    )
}