import { Component } from "react";

class Formulario2 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nombre: '',
            correo: ''
        }
    }

    handleSumbit = (e) => {
        e.preventDefault()
        //const inputName=document.getElementById('inputname') Reemplazar con 'ref'
        //const inputMail=document.getElementById('inputmail')
        alert('Nombre: ' + this.state.nombre + '\nCorreo: ' + this.state.correo)
    }

    handleOnChangeName = (e) => {
        this.setState({
            ...this.state, //operador express. Vuelve a definir todos los atributos del estado.
            //luego 'pisas' con lo que queres cambiar: (porque la volves a definir una vez mas)
            nombre: e.target.value,
        })
    }

    handleOnChangeMail = (e) => {
        this.setState({
            ...this.state,
            correo: e.target.value,
        })
    }

    render() {
        const { nombre, correo } = this.state
        return (
            <>
                <form onSubmit={this.handleSumbit}>
                    <p>
                        <label htmlFor="inputname">nombre</label>
                        <input id="inputname"
                            value={nombre}
                            onChange={this.handleOnChangeName}
                        />
                    </p>
                    <p>
                        <label htmlFor="inputmail">correo</label>
                        <input id="inputmail" value={correo}
                            onChange={this.handleOnChangeMail}
                        />
                    </p>
                    <p>
                        <button>Subscribe</button>
                    </p>
                </form>


            </>
        )
    }

}

export default Formulario2