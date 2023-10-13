import { Component } from "react";

class Vida2 extends Component{
    constructor(props){
        super(props)
        this.state={
            toggle:false
        }
    }
    render(){
        let toggle = this.state.toggle
        return(
            <>
            <button onClick={()=>{this.setState({toggle: !toggle})}}>
                {this.state.toggle ? 'Esconder' :'Mostrar'}</button>
            {this.state.toggle && this.props.children}
            </>
            
        )
    }

}

export default Vida2