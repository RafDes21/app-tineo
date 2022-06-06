import React from "react";
import Item from "./Item";
import "../itemDetailContainer.css";

const ItemList = ({ pelicula }) => {
  return (
    <div className="container">
      <div className="row p-0 m-0">
        {pelicula.length > 0 ? (
          pelicula.map((peli, index) => (
            <Item
              key={index}
              nombre={peli.nombre}
              mensaje={peli.mensaje}
              imagen={peli.imagen}
              id={peli.id}
              categoria={peli.categoria}
            />
          ))
        ) : (
          <div className="lds">
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ItemList;
