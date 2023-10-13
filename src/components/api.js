import { Component } from "react";

class Api extends Component{

    constructor(props){
        super(props)
        this.state={
            bpi:0
        }
    }

    componentDidMount(){
        this.getCotizar()
    }
    
    getCotizar(){
        //fetch busca la api web//es func del navegador
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        //es asíncrono el fetch, se suscribe a una promesa
        //el NAVEGADOR hace un request a la api y cuando la recibe le avisa al motor js
        .then(doc=>doc.json()) //trae el content y lo hace js
        .then(dat=>{
            const {bpi}=dat
            this.setState({bpi})
            //console.log(dat)
        })
        
    }
    render(){
        const {bpi}=this.state
        const keys = Object.keys(bpi)
        return(
            <div>
                {
                    keys.map((k)=>{
                    const {code,description,rate} = bpi[k]
                    return(
                        <div><b>{code}:</b>{description}. Tasa Bitcoin: {rate}</div>
                    )
                
                })
                }
            </div>
        )
    }
}
export default Api