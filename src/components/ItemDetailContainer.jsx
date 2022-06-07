import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./itemDetail/ItemDetail";
import db from "../service/fiberbase";
import { getDocs, collection } from "firebase/firestore";
import "./itemDetailContainer.css";
import detail from "../img/detail.jpg"

const ItemDetailContainer = () => {
  const params = useParams();
  const [detalles, setDetalles] = useState([]);
 

  useEffect(() => {
    const getDataDetail = async () => {
      const col = collection(db, "Series");
      try {
        const data = await getDocs(col);
        const result = data.docs.map(
          (doc) => (doc = { id: doc.id, ...doc.data() })
        );
        setDetalles(result.filter((dato) => dato.id === params.id));
      } catch (error) {
        console.log(error);
      }
    };
    getDataDetail();
  }, [params.id]);
  return (
    <div >
      {detalles.length > 0 ? (
        detalles.map((dato, index) => (
          <ItemDetail
            key={index}
            imagen={dato.imagen}
            nombre={dato.nombre}
            descripcion={dato.descripcion}
            temporadas={dato.temporadas}
            episodios={dato.episodios}
            calidad={dato.calidad}
            stock={dato.stock}
            id={dato.id}
            precio={dato.precio}
            fondo={dato.fondo}
          />
        ))
      ) : (
        <div className="lds" style={{backgroundImage:`url(${detail})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "contain"}}>
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
  );
};
export default ItemDetailContainer;
 
    
