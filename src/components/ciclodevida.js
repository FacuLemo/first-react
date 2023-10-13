import { Component } from "react";

class Vida extends Component{
    constructor(props){
        super(props)
        this.state={
            contador:0
        }
        setInterval(()=>{this.setState({contador: this.state.contador +1})},1000)
        //no puedo asumir que el comp ya se renderizó en el constructor!!
        console.log('Me estoy CREANDO')
    }
    componentDidMount(){
        console.log('ya me RENDERIZÉ (MONTÉ) (ESTOY EN EL DOM)')
    }
    componentDidUpdate(){
        console.log('ME ACTUALIZÉ :D')
    }
    componentWillUnmount(){
        console.log('Me estoy apunto de DES-renderizar, chao')
        //aca es cuando me desuscribo del evento
        //'clear interval'
    }

    render(){
        console.log('me estoy RENDERIZANDO AA')
        return(
            <div>{this.state.contador}</div>
        )
    }
}
export default Vida
