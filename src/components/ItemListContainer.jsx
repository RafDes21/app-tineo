import React from "react";
import { useParams } from "react-router-dom";
import ItemList from "./item/ItemList";
import { useEffect, useState } from "react";
import db from "../service/fiberbase";
import { getDocs, collection } from "firebase/firestore";

const ItemListContainer = () => {
  const params = useParams();
  const [pelicula, setPeliculas] = useState([]);
  const getData = async () => {
    try {
      const col = collection(db, "Series");
      const data = await getDocs(col);
      const result = data.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );

      if (params.categoria === "comics") {
        setPeliculas(
          result.filter((serie) => serie.categoria === params.categoria)
        );
      }
      if (params.categoria === "medicina") {
        setPeliculas(
          result.filter((serie) => serie.categoria === params.categoria)
        );
      }
      if (params.categoria === "drama") {
        setPeliculas(
          result.filter((serie) => serie.categoria === params.categoria)
        );
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
    <div
      style={{
        backgroundImage:
          "url(https://www.wallpapertip.com/wmimgs/78-788751_film.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
       objectFit:"contain"
      }}
    >
      <h1
        className="text-center fs-1 fw-bolder"
        style={{ textShadow: "4px 4px 10px white" }}
      >
        SERIES-FOX ONLINE
      </h1>
      <ItemList pelicula={pelicula} />
    </div>
  );
};

export default ItemListContainer;
    
      
    
