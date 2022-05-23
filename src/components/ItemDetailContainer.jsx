import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./itemDetail/ItemDetail";
import db from "../service/fiberbase";
import { doc, getDocs, collection } from "firebase/firestore";


const ItemDetailContainer = () => {
  const params = useParams();
  const [detalles, setDetalles] = useState([]);

  const getDataDetail = async () => {
    const col = collection(db, "Series");

    try {
      const data = await getDocs(col);
      const result = data.docs.map((doc) => (doc = { id: doc.id, ...doc.data() }));

      setDetalles(result.filter((dato) => dato.id === params.id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataDetail();
  }, []);

  return (
    <div>
      {detalles.map((dato) => (
        <ItemDetail
          imagen={dato.imagen}
          nombre={dato.nombre}
          descripcion={dato.descripcion}
          temporadas={dato.temporadas}
          episodios={dato.episodios}
          calidad={dato.calidad}
          stock={dato.stock}
          id={dato.id}
          precio={dato.precio}
        />
      ))}
    </div>
  );
};

export default ItemDetailContainer;
