import Mayor from "./esmayor";
import { Component } from "react";


class InfoUsers extends Component {
    render(){
        const {name,apellido,edad} = this.props.data
        return (<ul style={{
            border:'solid 1px black',
            borderRadius: 12,
        }}><li>nombre: {name}</li>
        <li>apellido: {apellido}</li>
        <li>{Mayor({edad})}</li>

        </ul>)
    }
}

export default InfoUsers