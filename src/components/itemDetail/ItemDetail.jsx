import React, { useState, useContext} from "react";
import { Link } from "react-router-dom";
import { GlobalContex } from "../../context/Globalprovider";
import ItemCount from "../ItemCount";
import "./itemDetail.css";




const ItemDetail = (serie) => {
 
  const {AddToCard} = useContext(GlobalContex)
  
  
   const [add, setAdd] = useState(false)

   const onAdd=(numero)=>{
     console.log('compre',numero)
      setAdd(!add)
      AddToCard({...serie,cantidad:numero})
    }
    
     
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div
              className="card"
              style={{ width: "22rem", margin: "10px auto" }}
            >
              <img src={serie.imagen} className="card-img-top" alt="..." />
            </div>
          </div>

          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title text-center">{serie.nombre}</h5>
              <p className="card-text">{serie.descripcion}</p>
              <ul>
                <li> Cantidad de Temporadas: {serie.temporadas}</li>
                <li>N° de Episodios: {serie.episodios}</li>
                <li>Calidad de Vídeo: {serie.calidad}</li>
              </ul>
              {
                add ? <>    <h2>Añadido!</h2>
                <Link to={`/cart`}>
                   Ir al carrito
                </Link></>
                   
                     
                       :
                       
                    <>
                         <ItemCount stock={serie.stock} agregar={onAdd}  />
                         
                         </>
                 
                      }
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
 
  
