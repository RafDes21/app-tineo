import React from "react";

const ItemList = (props) => {
  return (
    <div >
      
      <div className="card" style={{ width:"18rem"}}>
        <img style={{height:"13rem" }} src={props.imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            {props.mensaje}
          </a>
        </div>
      </div>
     </div>
  );
};

export default ItemList;
