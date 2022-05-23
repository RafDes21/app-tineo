import React, { useContext } from 'react'
import { GlobalContex } from '../context/Globalprovider'

const Cart = () => {
  const { carrito, removeItem, clearItems } = useContext(GlobalContex);

  return (
    <div className="container">
      {carrito.length > 0 ? (
        carrito.map((item, index) => (
          
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-4" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                  <img
                    style={{ width: "80px"}}
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
            </div>
           
          </div>
        ))
      ) : (
        <h1>carrito vacio</h1>
      )}

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
