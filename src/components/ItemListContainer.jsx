import React from "react";
import { useParams } from 'react-router-dom'
import ItemCount from "./ItemCount";
import ItemList from "./item/ItemList";
import { useEffect, useState } from "react";
import {Series} from "../data/Series"

const ItemListContainer = () => {
  
  const params = useParams()
  const [pelicula, setPeliculas] = useState([]);

   useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        let filtrarData = Series
        if(params.categoria === 'comics'){
           filtrarData = Series.filter((curso => curso.categoria ===params.categoria))
        }
        if(params.categoria === 'medicina'){
            filtrarData = Series.filter((curso => curso.categoria === params.categoria))
        }
        if(params.categoria === undefined){
           filtrarData = Series
        }
          
        
        resolve(filtrarData);
      }, 500);
    });

    promise
      .then((res) => {
        setPeliculas(res);
      }).catch((err) => console.log("hubo un erro" + err));

  }, [params.categoria]);
     
  return (
    <div>
      <h1 className="text-center">Lista De Productos</h1>
     
      <ItemList pelicula={pelicula}/>
    </div>
  );
};

export default ItemListContainer;
      
     
