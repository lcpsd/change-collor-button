import { useContext } from "react";
import { ColorContext } from "../context/colorContext";

export function useColor(){
    return useContext(ColorContext)
}