import React, { useContext } from 'react'
import { GlobalContex } from '../context/Globalprovider'

const Cart = () => {

    const {carrito,removeItem, clearItems}=useContext(GlobalContex)
   
 
  return (
   
   <div>
        { carrito.length > 0 ? carrito.map((item, index)=>(
          <>
            <li key={index}> {item.nombre} {item.episodios} {item.cantidad} </li>
           <button onClick={()=>removeItem(item.id)}>quitar</button>
           </>
        )): <h1>carrito vacio</h1>

        }
       

        <p onClick={()=>clearItems(carrito)} style={{cursor:"pointer", color:"red"}} >Vaciar Carrito</p>
       
    </div>
  )
}

export default Cart