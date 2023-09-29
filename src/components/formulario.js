import { Component } from "react";

class Formulario extends Component{

    handleSumbit(e){
        e.preventDefault()
        const inputName=document.getElementById('inputname')
        const inputMail=document.getElementById('inputmail')
        alert('Nombre: '+ inputName.value + '\nCorreo: '+ inputMail.value)
    }


    render(){
        return(
            <>
            <form onSubmit={this.handleSumbit}>
                <p>
                    <label htmlFor="inputname">nombre</label>
                    <input id="inputname"/>
                </p>
                <p>
                    <label htmlFor="inputmail">correo</label>
                    <input id="inputmail"/>
                </p>
                <p>
                    <button>Subscribe</button>
                </p>
            </form>


            </>
        )
    }
        
}

export default Formulario