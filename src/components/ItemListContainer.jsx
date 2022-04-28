import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = () => {
 

  return (
    <div>
      <h1>Lista De Productos</h1>

      <ItemCount cantidad={5}/>
    </div>
  );
};

export default ItemListContainer;
