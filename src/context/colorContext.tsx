import { createContext, useState } from "react";

export const ColorContext = createContext({} as colorContextType)

type colorContextType = {
    color: String;
    setColor: (value: string) => void;
}

export function ColorProvider(props: any){
    const [color, setColor] = useState('gray')

    return(
        <ColorContext.Provider value={{color, setColor}}>
            {props.children}
        </ColorContext.Provider>
    )
}