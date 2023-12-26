import { UseFilterContext } from "@/hooks/useFilterContext";
import { FilterType } from "@/types/filter-type";
import styled from "styled-components";

interface FilterByTypeProps{

}

interface FilterItemProps{
    selected: boolean
}

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    list-style: none;

`

const FilterItem = styled.li<FilterItemProps>`
    color: ${props => props.selected? 'var(--text-dark-inputs)': 'var(--text-dark)'};
    text-align: center;
    font-family: inherit;
    font-size: 1rem;
    font-weight: ${props => props.selected? '600': '400'};
    line-height: 1.375rem;
    text-transform: uppercase;
    cursor: pointer;

    border-bottom: ${props => props.selected? '0.25rem solid var(--others-orange-low)': ''}
    

`

export function FilterByType(props: FilterByTypeProps){
    
    const {type, setType} = UseFilterContext();

    const handleChangeType = (value: FilterType) =>{
        setType(value)
    }
    return(
        <FilterList>
            <FilterItem selected = {type === FilterType.ALL} onClick={() => handleChangeType(FilterType.ALL)}>todos os produtos</FilterItem>
            <FilterItem selected={type === FilterType.SHIRT} onClick={() => handleChangeType(FilterType.SHIRT)}>camisetas</FilterItem>
            <FilterItem selected={type === FilterType.MUG} onClick={() => handleChangeType(FilterType.MUG)}>canecas</FilterItem>    
        </FilterList>
    )
}

