import { Component } from "react"

class Clock extends Component{
    constructor(props){
        super(props)
        this.state={
            hora: this.getHora()
        }

        setInterval(()=>{ //MUGRE, un evento en el q no me desuscribo
            this.setState({hora: this.getHora()})
        },1*1000)
    }
    /* 
    normalizador(numero){
        const result = numero <10 ? '0'+numero : numero //  x = condicion ? si true : si false
        return result
    }
    */
    getHora(){
        let hora =new Date()
        let salida= `${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()}`
        return salida
    }

    render(){
        return(
            <div> Reloj: {this.state.hora} </div>
        )
    }
}
export default Clock
