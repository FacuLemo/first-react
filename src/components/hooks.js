//hooks funcionan sobre componentes funcionales:

import { useState,useEffect } from "react"

function LikeUseStateEffect (){
    //useState recibe un valor y devuelve array: [var,setVar]
    const [like,setLike] = useState(0)
    //Los hooks siempre tienen que estar arriba, solitos. Orden lineal. 
    //NO pueden estar dentro de un condicional ni iteraciones

    //useEffect recibe dos param: (Func, [condiciones,dependencias])
    //si de segundo param le pasas un array vacio ([]) se ejecuta sólo cuando se crea
    //como si fuera un ComponentDidMount 
    //si le retornas un objeto lo ejecuta como ComponentWillUnmount (cd muere)
    useEffect(()=>{
        console.log('EFECTO:HE nacido')
        return()=>{
            console.log('EFECTO:me muero') 
            //para matarlo hay q hacer renderizado condicional
        }
    },[])

    //acá cuando des like va a aplicar el useEffect
    useEffect(()=>{
        console.log('EFECTO:ActualizaciÓN')
        //si aca hubiera un return se ejecuta de todas formas en el update
    },[like])

    return(
        <>
        <button onClick={()=>setLike(like+1)}>Dar like</button>
        <b>{like}</b>
        <button onClick={()=>setLike(0)}>borrar likes</button>

        </>
    )
}

export default LikeUseStateEffect