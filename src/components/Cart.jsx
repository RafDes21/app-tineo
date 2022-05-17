import React, { useContext } from 'react'
import { GlobalContex } from '../context/Globalprovider'

const Cart = () => {

    const {carrito,removeItem}=useContext(GlobalContex)
   
    
    console.log(carrito);
  return (
   
   <div>
        { carrito.length > 0 ? carrito.map((item, index)=>(
          <>
            <li key={index}> {item.nombre} {item.episodios} {item.cantidad} </li>
           <button onClick={()=>removeItem(item.id)}>quitar</button>
           </>
        )): <h1>carrito vacio</h1>

        }
    </div>
  )
}

export default Cart