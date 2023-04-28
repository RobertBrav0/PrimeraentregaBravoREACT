
/*
export const Tarjetapersonal = (props) => {
    console.log(props)
    return (
        <div>
            <h4>Nombre:{props.nombre}</h4>
            <p>Edad: {props.edad}</p>
            <p>Curso:{props.curso} </p>
        </div>
    )
}
*/
export const Tarjetapersonal = (props) => {
   const {nombre, edad, curso}  = props
    return (
        <div>
            <h4>Nombre:{nombre}</h4>
            <p>Edad: {edad}</p>
            <p>Curso:{curso} </p>
        </div>
    )
}