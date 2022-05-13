import React from "react";
import "./itemDetail.css";

const ItemDetail = (props) => {
  
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div
              className="card"
              style={{ width: "22rem", margin: "10px auto" }}
            >
              <img src={props.imagen} className="card-img-top" alt="..." />
            </div>
          </div>

          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title text-center">{props.nombre}</h5>
              <p className="card-text">{props.descripcion}</p>
              <ul>
                <li> Cantidad de Temporadas: {props.temporadas}</li>
                <li>N° de Episodios: {props.episodios}</li>
                <li>Calidad de Vídeo: {props.calidad}</li>
              </ul>
              <a href="#" className="btn btn-primary">
                Comprar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
 
  
