import { Component } from "react";

class ClickContext extends Component{
    
    handleClick(){
        alert('Visita es.react.dev !!')
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>saludar</button>
            </div>
        )
    }
}

export default ClickContext