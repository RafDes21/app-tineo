import React from "react";
import ItemCount from "./ItemCount";
import Item from "./item/Item";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const [pelicula, setPeliculas] = useState([]);

  const listaPeliculas = [
    { imagen:"https://www.cinemascomics.com/wp-content/uploads/2020/06/the-flash-septima-temporada-godspeed.jpg", nombre: "flash", descripcion: "Joven Corredor", mensaje:"Alquilar" },
    
    { imagen:"https://www.cinemascomics.com/wp-content/uploads/2020/11/Stephen-Amell-revela-por-que-quiso-regresar-como-Arrow-960x720.jpg?mrf-size=s", nombre: "arrow", descripcion: "Cobra Venganza",mensaje:"Alquilar" },
    
    { imagen: "https://sm.ign.com/ign_es/news/t/the-batman/the-batman-sequel-announced-with-robert-pattinson-at-cinemac_jspq.jpg", nombre: "batman", descripcion: "Joven Rico",mensaje:"Alquilar" }
  ];

  useEffect(() => {
    const pedido = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(listaPeliculas);
      }, 5000);
    });

    pedido
      .then((res) => {
        setPeliculas(res);
      })
      .then(() => console.log(pelicula))
      .catch((err) => console.log("hubo un erro" + err));

    console.log(pelicula);
  }, []);

  return (
    <div>
      <h1>Lista De Productos</h1>
      <ItemCount cantidad={5} />
      <Item pelicula={pelicula}/>
    </div>
  );
};

export default ItemListContainer;
