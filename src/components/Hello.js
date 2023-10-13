import './hello.css'

const Hello=(props) =>{
    const {name, lname=''}= props
    return <h3 className='h1-hola'>HOLAA {name+' '+lname}!!!</h3>
  }

export default Hello