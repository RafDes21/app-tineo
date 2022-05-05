import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./item/ItemList";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  
  const [pelicula, setPeliculas] = useState([]);

  const listaPeliculas = [
    { imagen:"https://es.web.img2.acsta.net/pictures/17/09/29/21/15/4233147.jpg", nombre: "FLASH",  mensaje:"Alquilar" },
    
    { imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMAU4slG-foNx4hgUnG_xyVPgKzoby3x2vUw&usqp=CAU", nombre: "ARROW",mensaje:"Alquilar" },
    
    { imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-kDxfnKBdTTkXNi1UWNTPoZCWFXHPPr3wJINUsq7zOEspga-k-Wj0Tr3pfxsJ6wnSb0U&usqp=CAU", nombre: "BATMAN",mensaje:"Alquilar" }
  ];

  useEffect(() => {
    const pedido = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(listaPeliculas);
      }, 2000);
    });

    pedido
      .then((res) => {
        setPeliculas(res);
      }).catch((err) => console.log("hubo un erro" + err));

    
  }, []);

  return (
    <div>
      <h1>Lista De Productos</h1>
      <ItemCount cantidad={5} />
      <ItemList pelicula={pelicula}/>
    </div>
  );
};

export default ItemListContainer;
