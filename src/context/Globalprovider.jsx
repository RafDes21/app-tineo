import React, { createContext, useState } from "react";

export const GlobalContex = createContext("");

const Globalprovider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
console.log(carrito);
  const AddToCard = (producto) => {
    const newCarrito = [...carrito];
    const index = carrito.findIndex((prod) => prod.id == producto.id);

    if (index !== -1) {
      const cantidadAnt = carrito[index].cantidad;
      const nuevaCantidad = cantidadAnt + producto.cantidad;
      newCarrito[index] = { ...producto, cantidad: nuevaCantidad };
    } else {
      newCarrito.push(producto);
    }

    setCarrito(newCarrito);
  };

  const removeItem = (itemId) => {
    const newCarrito = carrito.filter((serie) => serie.id !== itemId);
    setCarrito(newCarrito);
  };

  const clearItems = () => {
    setCarrito([]);
  };
  return (
    <GlobalContex.Provider value={{ carrito, AddToCard, removeItem, clearItems }}>
      {children}
    </GlobalContex.Provider>
  );
};

export default Globalprovider;
