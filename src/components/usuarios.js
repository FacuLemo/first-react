
import { Component } from "react";


class InfoUsers extends Component {
    render(){
        const {name,clave} = this.props.data
        return (<div style={{
            border:'solid 1px black',
            borderRadius: 12,
        }}><p>nombre: {name}</p>
        <p>pass: {clave}</p>
        </div>)
    }
}

export default InfoUsers