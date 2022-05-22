import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContex } from '../context/Globalprovider'

const CartWidget = () => {

const {carrito}=useContext(GlobalContex)

let cantidad = 0
carrito.map((item)=>{
  return cantidad = cantidad + item.cantidad
})



  return (
    <div>
      <Link to={`/cart`}>
      <i class=" CartWidget fa-solid fa-cart-shopping font-size-4" ></i>
      </Link>
      <span> {cantidad}</span>
    </div>
      
  )
      
}
export default CartWidget


