import { useColor } from '../hooks/colorContextHook'
import '../styles/box.css'


export function BoxColored(){

    const {color} = useColor()
    
    return(
        <div className={'box ' + color}>
            {color}
        </div>
    )
}