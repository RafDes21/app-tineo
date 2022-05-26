import React, { useContext } from "react";
import { GlobalContex } from "../context/Globalprovider";
import Formulario from "./Formulario";



const Cart = () => {
  const { carrito, removeItem, clearItems } = useContext(GlobalContex);

 
  const precioTotal=()=> {
    let suma = 0;
    for (let i = 0; i < carrito.length; i++) {
      suma = suma + carrito[i].cantidad * carrito[i].precio;
    }
    return suma;
  };
  console.log(precioTotal());


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {carrito.length > 0 ? (
            carrito.map((item, index) => (
              <div className="row">
                <div
                  className="col-md-4"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{ width: "80px" }}
                    src={item.imagen}
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">Cantidad: {item.cantidad} </p>
                    <p className="card-text">Precio: ${item.precio} </p>
                    <button onClick={() => removeItem(item.id)}>Quitar</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1>carrito vacio</h1>
          )}
        </div>
        <div className="col-md-6">
         <Formulario total={precioTotal()} compra={carrito}/>
          {/* <form action="">
                  <label htmlFor="">Nombre</label>
                  <input type="text" required />
                  <label htmlFor="">Apellido</label>
                  <input type="text" required/>
                  <label htmlFor="">Telefono</label>
                  <input type="text" required/>
                  <label htmlFor="">Mail</label>
                  <input type="email" required />
                  <button>total</button>
                  <button>comprar</button>
              </form> */}
        </div>
      </div>
      <p
        onClick={() => clearItems(carrito)}
        style={{ cursor: "pointer", color: "red" }}
      >
        Vaciar Carrito
      </p>
    </div>
  );
};
export default Cart;
