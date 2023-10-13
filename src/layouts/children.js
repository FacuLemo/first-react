import { Component } from "react";
import "./children.css"
import PropTypes from 'prop-types'

//Saber pos. de una etiqueta:
//let ref={(ref)=>{
//let coordenadas=ref.getBoundingClientRect()
//console.log(coordenadas)}}

class Box extends Component{
    constructor(props){
        super(props)
        this.state={
            active: props.active
        }
    }
    
    render(){

        const {active=true}=this.state
        //console.log(typeof active)
        
        return(
            
            <div className={active ? "caja":"caja_disable"}>
            {this.props.children}
            </div>
        )
    }
}

Box.propTypes = {
    active: PropTypes.bool.isRequired
}

export default Box