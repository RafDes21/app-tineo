import React, { createContext, useState } from 'react'

export const GlobalContex = createContext("")

const Globalprovider = ({children}) => {

 const [carrito, setCarrito]= useState([])

 const AddToCard = (producto)=> {
     setCarrito([...carrito,producto])
 }

  return (
    <GlobalContex.Provider value={{carrito, AddToCard}}>
          {children}
    </GlobalContex.Provider>
  )
}

export default Globalprovider