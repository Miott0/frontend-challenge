'use client'

import styled from "styled-components"
import { ArrowIconDown } from "./arrow-icon-down"
import { useState } from "react"
import { UseFilter } from "@/hooks/useFilter"
import { PriorityType } from "@/types/priority-types"

const FilterContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    position: relative;

    button{
        border: none;
        background: transparent;
        cursor: pointer;
        color: var(--text-dark);
        text-align: center;
        font-family: inherit;
        font-weight: 400;


        display:flex;
        align-items: center;
        justify-content: center;
    }
    svg{
        margin-left: 8px;
    }

`

const PriorityFilter = styled.ul`
    display:flex;
    position: absolute;
    flex-direction: column;
    width:200px;
    top:100%;
    left: 0px;
    z-index: 999;
    
    padding: 12px 16px;
    border-radius: 0.25rem;
    background: #FFF;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.10);

    list-style: none;
    
    
    li{
        cursor: pointer;
    }

`

export function FilterByPriority(){
    const [isOpen, setIsOpen] = useState(false)
    const {setPriority} = UseFilter()
   
    const hanldeUpdatePriority = (value: PriorityType) => {
        setPriority(value)
        setIsOpen(false)
    }

    const handleOpen = () =>{setIsOpen(prev => !prev)}



    return(
        <FilterContainer>
            <button onClick={() => handleOpen()}>Organizar por <ArrowIconDown/></button>
            
            {isOpen && 
                <PriorityFilter>
                    <li onClick={ () => hanldeUpdatePriority(PriorityType.NEWS)}>Novidades</li>
                    <li onClick={ () => hanldeUpdatePriority(PriorityType.BIGGEST_PRICE)}>Preço: Maior - menor</li>
                    <li onClick={ () => hanldeUpdatePriority(PriorityType.MINOR_PRICE)}>Preço: Menor - maior</li>
                    <li onClick={ () => hanldeUpdatePriority(PriorityType.POPULARITY)}>Mais vendidos</li>
                </PriorityFilter> 
            }
        </FilterContainer>
        
    )
}