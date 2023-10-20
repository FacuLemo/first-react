import { useState, useEffect } from "react";

function useTimer(sec) {
    const [secondsInit,] = useState(sec)
    const [seconds, setSeconds] = useState(0)

    const start = () => setSeconds(secondsInit)
    const stop = () => setSeconds(0) //terminamos el timer haciendolo terminar

    useEffect(() => {
        setInterval(() => {
            setSeconds(seconds => seconds > 0 ? seconds - 1 : 0)
            //busco el estado viejo y le resto un seg. Si ya es 0 no hago nada.
        }, 1 * 1000);
    }, [])

    return {
        finished: seconds < 1,
        seconds,
        start,
        stop
    };
}
export default useTimer;