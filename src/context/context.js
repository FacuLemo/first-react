
import { createContext } from "react";
import useTimer from "../hooks/timer";

//hooks context. Usado para un estado global de los componentes.
//Ejemplo de uso: 
//  -Tema(oscuro,claro). Lenguaje. (US, ES, RU)
//  -Usuario Logeado,mostrar cosas dirigidas a ese user.
//  -Enrutado, Saber en q ruta estas.
export const BuyContext = createContext()

//necesito un proveedor que le comunique a los componentes este contexto
//le hacemos uno custom para darle la lógica que necesito
export const BuyContextProvider = ({children})=>{
    //si quisiera un setState puedo ponerlo
    const timer = useTimer(14)
    return(
        <BuyContext.Provider value={timer}>
        {children}
        </BuyContext.Provider>
    )
}//ANALOGÍA: el context es tu chip del cel y el provider la antena.

//podría incluso extraerse el context y ponerlo en su propia carpeta.
//No es muy necesario porque son 10 líneas locas y el contexto literalmente 1 sola
