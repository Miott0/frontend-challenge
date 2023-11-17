import { useState } from "react";

export function useLocalStorage<T>(item: string){
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(item)?? ''))
    const updateLocalStorge =  (newValue: T) =>{
        setValue(newValue)
        localStorage.setItem(item, JSON.stringify(newValue))
    }
    
    return{
        updateLocalStorge,
        value
    }
       
    
}