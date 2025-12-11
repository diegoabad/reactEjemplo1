
import Card from './Card.jsx'
import { personajes, personajesElegidos } from './data/personajes.js'
import { useState } from 'react'
function App() {

  const [cart, setCart] = useState(personajesElegidos);


  const agregarPersonaje  = (personaje)  => {
    const personajeEncontrado = cart.find((p) => p.id === personaje.id);
    if (personajeEncontrado) {
      setCart(cart.map((p) => p.id === personaje.id ? {...p, cantidad: p.cantidad + 1} : p));
    } else {
      setCart([...cart, {...personaje, cantidad: 1}]);
    }
  }


  return (
    <>

    {personajes.map((personaje)=><Card personaje={personaje} key={personaje.id} agregarPersonaje={agregarPersonaje} />)}
    
    <h2>Personajes Elegidos</h2>
    {cart.map((personaje)=>{
      return (
        <div key={personaje.id}>
           <p >{personaje.nombre} - {personaje.apellido} - {personaje.cantidad}</p>
       <button>Eliminar</button>
       </div>
      )
    })}
    </>
  )
}

export default App
