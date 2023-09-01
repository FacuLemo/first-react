import { Component } from "react";
import InfoUsers from "./usuarios";

class ListarUsuario extends Component {
    render() {
        const {usuarios} = this.props
        return (
            <article>
                {
                    usuarios.map(
                        (usuario) => { return (<InfoUsers key={usuario.id} data={usuario} />) }
                    )
                }
            </article>
        )
    }
}

export default ListarUsuario