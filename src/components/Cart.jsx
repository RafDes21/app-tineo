import React, { useContext } from 'react'
import { GlobalContex } from '../context/Globalprovider'

const Cart = () => {

    const {carrito}=useContext(GlobalContex)
  return (
    <div>
        { carrito.length > 0 ? carrito.map((item, index)=>(
            <li key={index}> {item.nombre}</li>
        )): <h1>carrito vacio</h1>

        }
    </div>
  )
}

export default Cart