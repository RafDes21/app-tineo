import React, { useContext, useState } from "react";


const ItemCount = ({stock,agregar}) => {
  const [contador, setContador] = useState(1);

  function restar() {
    contador > 1 ? setContador(contador - 1):alert("hay stock");
  }

  function sumar() {
   contador < stock  ? setContador(contador + 1) : alert("no hay stock");
  }

  return (
   
       <div  className="container" style={{display:"flex",justifyContent: "space-around", width:"50%", fontSize:"10px"}}>
      
         <button  onClick={restar}><i className="fa-solid fa-minus btn"></i></button>
      
         <h1> {contador}</h1>
        
         <button onClick={sumar}><i className="fa-solid fa-plus btn"></i></button>
         <button onClick={()=>agregar(contador)}  style={{padding:"10px 10px", margin:"10px auto", display:"flex"}}>Agregar al carrito</button>
        
      </div>
         
         
           
         
     
      
         
   
   
   
  );
};

export default ItemCount;
