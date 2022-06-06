import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContex } from "../../context/Globalprovider";
import ItemCount from "../ItemCount";
import "./itemDetail.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetail = (serie) => {
  function swal(mensaje) {
    toast.success(mensaje, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
      });
  }
  const { AddToCard } = useContext(GlobalContex);
  const [add, setAdd] = useState(false);
  const onAdd = (numero) => {
    setAdd(!add);
    AddToCard({ ...serie, cantidad: numero });
    swal("SE AGREGO AL CARRITO")
  };
  
  return (
    <div
      className="container-fluid"
     
    >
      <div className="row" style={{
        backgroundImage: `url(${serie.fondo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit:"contain"
      }}>
        <div className="col-md-6">
          <div className="card" style={{ width: "22rem", margin: "50px auto" }}>
            <img src={serie.imagen} className="card-img-top" alt="..." />
          </div>
        </div>
        <div
          className="col-md-6"
          style={{ backgroundColor: "rgba(10, 36, 36, 0.5)" }}
        >
          <div className="card-body" style={{ margin: "40px auto" }}>
            <h5
              className="card-title text-center fs-3"
              style={{ color: "white", textShadow: "2px 2px green" }}
            >
              {serie.nombre}
            </h5>
            <p
              className="card-text fs-4"
              style={{ color: "white", textShadow: "2px 2px 2px black" }}
            >
              {serie.descripcion}
            </p>
            <ul style={{ color: "white", textShadow: "2px 2px 2px black" }}>
              <li> Cantidad de Temporadas: {serie.temporadas}</li>
              <li>N° de Episodios: {serie.episodios}</li>
              <li>Calidad de Vídeo: {serie.calidad}</li>
              <li>Stock: {serie.stock}</li>
            </ul>
            {add ? (
              <>
                <h2
                  className="text-center"
                  style={{
                    color: "lightgreen",
                    textShadow: "2px 2px 2px green",
                  }}
                >
                  Añadido!!!
                </h2>
                <Link style={{ textDecoration: "none" }} to={`/cart`}className="btn btn-outline-info carrito">
                   Ir al carrito
                </Link>
              </>
            ) : (
              <>
                <ItemCount stock={serie.stock} agregar={onAdd} />
              </>
            )}
            <Link style={{ textDecoration: "none" }} to={"/"}className="btn btn-success btn-comprar">
              Volver al Catálogo
            </Link>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
