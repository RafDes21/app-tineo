import React from "react";
import Item from "./Item";


const ItemList = ({pelicula}) => {

  return (
    <div className="container" >

              <div className="row p-0 m-0">

                   {pelicula.length > 0 ? pelicula.map((peli,index)=>(
                    <Item nombre={peli.nombre} mensaje={peli.mensaje} imagen={peli.imagen} id={peli.id}/>
                    )):
                    <h1 className="text-center">cargando...<i class="fa-solid fa-spinner"></i></h1>

                  }
              </div>
    </div>
  );

};

export default ItemList;
