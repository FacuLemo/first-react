//cajita para trackear el movimiento del mou

import { Component } from "react";

class Cajita extends Component {

    constructor(props) {
        super(props)
        this.state = {
            x: 0,
            y: 0
        }
        this.handleMouseMovement = this.handleMouseMovement.bind(this)
    }

    handleMouseMovement(e) {  //version 1 con el this bindeado
        const { clientX, clientY } = e
        this.setState({
            x: clientX,
            y: clientY
        })
    }

    handleMouseMovement2 = (e) => { //version 2 hecha con arrow func
        const { clientX, clientY } = e
        this.setState({
            x: clientX,
            y: clientY
        })
    }

    render() {
        const { x, y } = this.state
        return (
            <div>
                <p> X: {x}, Y:{y}</p>
                <div style={{
                    width: 300,
                    height: 150,
                    border: 'solid black 1px'
                }} onMouseMove={this.handleMouseMovement2}>
                </div>
            </div>
        )
    }
}

export default Cajita