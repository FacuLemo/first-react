const Mayor=(props) =>{
    const {edad}= props
    if (edad < 18 ) return <p> No es mayor de edad</p>
    return <p>Sí es mayor de edad</p>
}

export default Mayor