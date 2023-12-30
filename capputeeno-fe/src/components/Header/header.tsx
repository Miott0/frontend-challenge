"use client"

import { styled } from "styled-components"
import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputWSearchIcon } from "./primary-input"
import { CartControl } from "./cart-control"
import { UseFilter} from "@/hooks/useFilter"


interface HeaderProps{

}

const sairaStencil = Saira_Stencil_One({ subsets: ['latin'], weight: ['400']})

const TagHeader = styled.header`
    display:flex;
    align-itens: center;
    justify-content: space-between;
    padding: 12px 24px;
    background: #fff;
    
    @media(min-width: ${props => props.theme.desktopBreakpoint}){
        padding: 20px 160px;
    }

    > div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }
`
const Logo = styled.a`
    color: var(--logo-color);
    font-size: 32px;
    font-weight: 400;
    line-height: 150%;
    text-decoration: none;

    @media(min-width: ${props => props.theme.desktopBreakpoint}){
        font-size: 40px;
    }
`
export function Header(props : HeaderProps){
    const {setSearch, search} = UseFilter();

    return(
        <TagHeader>
            <Logo className={sairaStencil.className}>Capputeeno</Logo>
            <div>
                <PrimaryInputWSearchIcon
                    value={search}
                    handleChange={setSearch}
                    placeholder="Procurando por algo específico?"
                />
                <CartControl/>
            </div>
        </TagHeader>
    )
}