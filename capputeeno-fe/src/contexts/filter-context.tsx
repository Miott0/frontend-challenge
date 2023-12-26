'use client'

import { ReactNode, createContext, useState } from "react";
import { FilterType } from '@/types/filter-type'
import { PriorityType } from "@/types/priority-types";

export const FilterContext = createContext({
    seacrh: '',
    page: 0,
    type: FilterType.ALL,
    priority: PriorityType.NEWS,
    setPriority: (valuer: PriorityType) => {},
    setSearch: (value: string) => {},
    setPage: (value: number) => {},
    setType: (value: FilterType) => {},
})

interface ProviderProps{
    children: ReactNode
}

export function FilterContextProvider({children} : ProviderProps){
    
    const [seacrh, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.ALL)
    const [priority, setPriority] = useState(PriorityType.NEWS)

    
    return(
        <FilterContext.Provider value={{seacrh, page, type, priority, setPriority, setSearch, setPage, setType}}>
            {children}
        </FilterContext.Provider>

    )
}