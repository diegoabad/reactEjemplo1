
function Card({personaje , agregarPersonaje}) {
  return (
    <div>
    
       <p>{personaje.nombre} - {personaje.apellido} </p>
       <button onClick={() => agregarPersonaje(personaje)}>Agregar</button>

    </div>
  )
}

export default Card