import { FilterContext } from "@/contexts/filter-context";
import { useContext } from "react";

export function UseFilterContext(){
    return useContext(FilterContext)
}