import { FilterContext } from "@/contexts/filter-context";
import { useContext } from "react";

export function UseFilter(){
    return useContext(FilterContext)
}