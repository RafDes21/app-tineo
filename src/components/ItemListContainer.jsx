import React from "react";
import { useParams } from "react-router-dom";
import ItemList from "./item/ItemList";
import { useEffect, useState } from "react";
import db from "../service/fiberbase";
import { doc, getDocs, collection } from "firebase/firestore";

const ItemListContainer = () => {
  const params = useParams();
  const [pelicula, setPeliculas] = useState([]);


  const getData = async () => {
    try {
      const col = collection(db, "Series");
      const data = await getDocs(col);
      const result = data.docs.map((doc) => (doc = { id: doc.id, ...doc.data() }));

      if (params.categoria === "comics") {
        setPeliculas( result.filter((serie) => serie.categoria === params.categoria))
        
      }
      if (params.categoria === "medicina") {
        setPeliculas(result.filter((serie) => serie.categoria === params.categoria))
        
      }
      if (params.categoria === undefined) {
        setPeliculas(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [params.categoria]);

  return (
    <div>
      <h1 className="text-center">Lista De Productos</h1>

      <ItemList pelicula={pelicula} />
    </div>
  );
};

export default ItemListContainer;