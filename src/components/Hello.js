import './hello.css'

const Hello=(props) =>{
    const {name, lname=''}= props
    return <h1 class='h1-hola'>HOLAA {name+' '+lname}!!!</h1>
  }

export default Hello