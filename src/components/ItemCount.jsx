import React, { useState } from "react";

const ItemCount = (props) => {
  
  const [contador, setContador] = useState(1);

  function restar(params) {
    contador > 1 ? setContador(contador - 1):alert("hay stock");
  }

  function sumar(params) {
    contador < props.cantidad ? setContador(contador + 1) : alert("no hay stock");
  }

  return (
   
       <div  className="container" style={{display:"flex",justifyContent: "space-around", width:"50%", fontSize:"10px"}}>
      
         <button  onClick={restar}><i className="fa-solid fa-minus btn"></i></button>
      
         <h1> {contador}</h1>
        
         <button onClick={sumar}><i className="fa-solid fa-plus btn"></i></button>
         
        
      </div>
         
         
           
         
     
      
         
   
   
   
  );
};

export default ItemCount;
