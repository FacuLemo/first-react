import { Component } from "react";

class Toast extends Component{
    constructor(props){
        super(props)
        this.state = {
            visible:true
        }
        setTimeout(() => {
            this.setState({visible:false})
        }, props.tiempo *1000);


    }
    render(){
        if (!this.state.visible) return null
        return(
            <div style={
                {border: "solid black 1px",
                backgroundColor: "dimgray",
                position:"fixed",
                bottom:"50px",
                borderRadius:"5px"
            }
            }>
                {this.props.mensaje}
            </div>
        )
    }
}
Toast.defaultProps ={
    mensaje: "no hay mensaje",
    tiempo: 5
}

export default Toast