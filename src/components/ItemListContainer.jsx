import React from "react";
import ItemCount from "./ItemCount";
import ItemList from "./item/ItemList";
import { useEffect, useState } from "react";
import ItemDetailContainer from "./ItemDetailContainer";



const ItemListContainer = () => {
  
  const [pelicula, setPeliculas] = useState([]);

  const listaPeliculas = [
    { id:1, imagen:"https://es.web.img2.acsta.net/pictures/17/09/29/21/15/4233147.jpg", nombre: "FLASH",  mensaje:"Detalles" },
    
    { id:2, imagen:"https://r3.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic4.abc.es%2Fmedia%2Fcapitulos%2F000%2F150%2F257%2Fepisodio-11-1.jpg&nuevoancho=683&medio=abc", nombre: "ARROW",mensaje:"Detalles" },
    
    { id:3 ,imagen: "https://1.bp.blogspot.com/-toGSP3ivu3M/XOvuj1m-JYI/AAAAAAABUXQ/erR-cEjQ4uAFmYzU-rHQvek4CtUW1axogCLcBGAs/s1600/Supergirl%2Bseason%2B4%2B%25280%2529.jpg", nombre: "SUPERGIRL",mensaje:"Detalles" }
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
      <h1 className="text-center">Lista De Productos</h1>
      <ItemCount cantidad={5} />
      {listaPeliculas.map((peli)=>(

        <ItemDetailContainer key={peli.id} id={peli.id} />
        
       
      ))}
      
      <ItemList pelicula={pelicula}/>
    </div>
  );
};

export default ItemListContainer;
