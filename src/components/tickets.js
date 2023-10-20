import { useContext, useState } from 'react'; //hooks react
import { BuyContext } from '../context/context';

export function Tickets(){
    const [count,setCount]=useState(0)

    const {seconds,stop} =  useContext(BuyContext)

    return(

        <>
        <h1>Pague su ticket</h1>
        <span>{seconds}</span>
        <button onClick={stop}>Pagar</button>
        </>
    )
}