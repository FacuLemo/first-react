import { Component } from "react";

class InfoPersona extends Component {
    //el props viene por herencia, se puede llamar con this.props.name
    render() {
        return (
            <table >
                <thead>
                    <tr>
                        <th scope="col">nombre</th>
                        <th scope="col">apellido</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.name}</td>
                        <td>{this.props.lname}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default InfoPersona