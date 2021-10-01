import { useColor } from '../hooks/colorContextHook'
import '../styles/box.css'

export function Button(props: any){

    const {setColor} = useColor()

    return(
        <button onClick={() => setColor(props.color)} className={props.color}>Change to {props.color}</button>
    )
}