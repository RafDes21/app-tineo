import React, { useState } from "react";

const ItemCount = (props) => {
  console.log(props.cantidad);
  const [contador, setContador] = useState(0);

  function restar(params) {
    contador > 0 ? setContador(contador - 1) : alert("no hay stock");
  }

  function sumar(params) {
    contador < props.cantidad ? setContador(contador + 1) : alert("no hay stock");
  }

  return (
   
       <div  className="contador"style={{display: "flex", margin: "40px auto",width: "500px",justifyContent: "space-between", borderRadius:"10px",}}>
      
         <button onClick={restar}><i className="fa-solid fa-minus btn"></i></button>
      
         <h1> {contador}</h1>
        
         <button onClick={sumar}><i className="fa-solid fa-plus btn"></i></button>
         
         <button >Agregar al carrito</button>
      </div>
     
      
         
   
   
   
  );
};

export default ItemCount;
