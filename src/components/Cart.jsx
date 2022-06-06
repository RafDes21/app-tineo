import React, { useContext } from "react";
import { GlobalContex } from "../context/Globalprovider";
import Formulario from "./Formulario";
import { Link } from "react-router-dom";
import cardFondo from "../img/cardFondo.jpg"

const Cart = () => {
  const { carrito, removeItem, clearItems } = useContext(GlobalContex);
  const precioTotal = () => {
    let suma = 0;
    for (let i = 0; i < carrito.length; i++) {
      suma = suma + carrito[i].cantidad * carrito[i].precio;
    }
    return suma;
  };
  return (
    <div className="container-fluid" style={{
      backgroundImage:`url(${cardFondo})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      
    }}>
      <div className="row m-0">
        {carrito.length < 1 ? (
          <>
            <h1
              className="text-center text-uppercase"
              style={{ marginTop: "50px" }}
            >
              carrito vacío
            </h1>
            <Link style={{ display: "flex", textDecoration: "none" }} to={"/"}>
              <button
                className="btn btn-info text-uppercase"
                style={{
                  margin: "20px auto",
                  padding: "20px",
                  color: "white",
                  textShadow: "2px 2px 2px black",
                }}
              >
                Volvé al catálogo con un click
              </button>
            </Link>
          </>
        ) : (
          <p
            onClick={() => clearItems(carrito)}
            style={{
              display:"flex",
              cursor: "pointer",
              color: "red",
              fontSize: "25px",
              marginTop: "40px",
            }}
          >
            <i className="fa-solid fa-trash-can" style={{marginLeft:"auto",marginRight:"100px"}}></i>
          </p>
        )}
        <div className="col-md-6" style={{ height: "490px", overflow: "auto" }}>
          {carrito.length > 0 ? (
            carrito.map((item,index) => ( 
              <div key={index} className="row" style={{backgroundColor:"rgba(0, 0, 0, 0.7) "}}>
                <div
                  className="col-md-4 col-sm-4 col-4"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                   
                    style={{ width: "120px",padding:"4px 0",borderRadius:"7px" }}
                    src={item.imagen}
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="col-md-8 col-sm-8 col-8" style={{fontWeight:"500",color:"white"}}>
                  <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">Cantidad: {item.cantidad} </p>
                    <p className="card-text">Precio x uni.: ${item.precio} </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="btn btn-outline-danger"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
        <div className="col-md-6">
          {carrito.length < 1 ? (
            ""
          ) : (
            <Formulario total={precioTotal()} compra={carrito} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Cart;

 
