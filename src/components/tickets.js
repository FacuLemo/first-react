import { useContext, useState } from 'react'; //hooks react
import { BuyContext } from '../context/context';

export function Tickets(){
    const [count,setCount]=useState(0)

    const {seconds,stop} =  useContext(BuyContext)

    return(

        <>
        <h3>Pague su ticket. Tiene {seconds} s.</h3>
        <button onClick={stop}>Pagar</button>
        </>
    )
}