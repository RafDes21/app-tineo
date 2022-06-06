import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ItemCount = ({ stock, agregar }) => {
  function swal(mensaje) {
    toast.success(mensaje, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
      });
  }
  const [contador, setContador] = useState(1);
  function restar() {
    contador > 1 ? setContador(contador - 1) : swal("la unidad mínima es 1");
  }
  function sumar() {
    contador < stock ? setContador(contador + 1) : swal("alcanzaste la unidad máxima");
  }
  return (
    <div
      className="container p-0"
      style={{
        display: "flex",
        alignItems: "center",
        width: "80%",
        fontSize: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "60%",
          justifyContent: "space-around",
          height: "40px",
        }}
      >
        <button onClick={restar}>
          <i className="fa-solid fa-minus btn"></i>
        </button>
        <h1
          style={{
            marginTop: "-5px",
            color: "lightgreen",
            textShadow: "2px 2px 4px black",
          }}
        >
          {contador}
        </h1>
        <button onClick={sumar}>
          <i className="fa-solid fa-plus btn"></i>
        </button>
      </div>
      <button 
        onClick={() => agregar(contador)}
        className="btn btn-primary"
        style={{ margin: "auto" }}
      >
        Agregar al carrito
      </button>
      <ToastContainer />
    </div>
  );
};
export default ItemCount;
