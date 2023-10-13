//Custom Hooks.
import { useEffect, useState } from "react"

//debería ser extraído y guardado en una carpeta llamada hooks.
//para la buena práctica, of course.
function useTemporizador(t=15){
    const [tiempo,setTiempo] = useState(t)

    useEffect(()=>{
        setTimeout(()=>{
            if(tiempo>0){setTiempo(tiempo-1)}
            
        },1*1000)
    },[tiempo])
    return tiempo
}

function TemporizadorCustom(){
    let seg = useTemporizador(7) //si esta FUNCION HOOK cambia de estado,
                            //RENDERIZA EL COMPONENTE DE NUEVO!! q locura
    return(
        <div>
            faltan {seg} segundos!!
        </div>
    )
}

export default TemporizadorCustom