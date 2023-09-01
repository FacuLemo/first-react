import { Component } from "react";

class Cronometro extends Component {
    constructor(props){
        super(props)
        this.state = {contador:props.inicio}

        setInterval(()=>{this.setState({contador: this.state.contador +1})},1000)
    }
    render(){
        return(
            <div>
                Segundero: {this.state.contador}s... 
                <br></br>
                <button onClick={()=>{this.setState({contador:this.props.inicio})}}>resetear</button>
                {/* podría agregar un comp estatico (llamar funcion normal) 
                que dependa del Estado de este componente */}
            </div>
        )
    }
}
Cronometro.defaultProps={
    inicio:0
}
export default Cronometro