import React from "react";
import { Link} from "react-router-dom";


const Item = (props) => {

 

  return (
    <div
      className="card col-md-4 p-0"
      style={{ width: "18rem", margin: "10px auto" }}
    >
      <img
        style={{ height: "25rem", width: "100%" }}
        src={props.imagen}
        className="card-img-top"
        alt="..."
      />

      <h5
        style={{
          position: "absolute",
          bottom: "0",
          right: "20PX",
          fontSize: "20px",
          color: "white",
          textShadow:"2px 2px 2px green"
        }}
        className="card-title"
      >
        {props.nombre}
      </h5>
      <Link to={`/detalles/${props.id}`} >
      <a
        style={{ position: "absolute", bottom: "10px", left: "20PX" }}
        
        className="btn btn-primary"
      >
        detalles
      </a>
      </Link>
     
     </div>
  );
};

export default Item;
