import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Series} from "../data/Series"
import ItemDetail from "./itemDetail/ItemDetail"

const ItemDetailContainer = () => {
  const params = useParams()
  const [detalles, setDetalles]=useState([])

        useEffect(() => {
           const promise = new Promise((resolve, reject) => {
      
              setTimeout(() => {
                    const nuevo = Series.filter(dato=>dato.id === parseInt(params.id))
              resolve(nuevo)
              }, 500);
       
        });
    promise
      .then((res) => {
        setDetalles(res);
      }).catch((err) => console.log("hubo un erro" + err));
  }, []);
  return (
    
    <div>
      {
         detalles.map((dato)=> (
           <ItemDetail imagen={dato.imagen} nombre={dato.nombre} descripcion={dato.descripcion}
           temporadas={dato.temporadas} episodios={dato.episodios} calidad={dato.calidad} stock={dato.stock} id={dato.id}/>
          ))
        }
      </div>
    )
  }
  
  export default ItemDetailContainer
    

    

  
  
  



       
       
        
      


    

  
 