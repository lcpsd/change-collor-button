import { useContext } from "react"
import { ColorContext } from "../context/colorContext"
import '../styles/box.css'

export function Button(props: any){

    const {setColor} = useContext(ColorContext)

    return(
        <button onClick={() => setColor(props.color)} className={props.color}>Change to {props.color}</button>
    )
}