import { useContext } from 'react'
import { ColorContext } from '../context/colorContext'
import '../styles/box.css'


export function BoxColored(){

    const {color} = useContext(ColorContext)
    
    return(
        <div className={'box ' + color}>
            {color}
        </div>
    )
}