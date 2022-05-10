import React from "react";
import Item from "./item/Item"


const Comics = () => {
  const comics = [
    {
      id: 1,
      imagen:
        "https://es.web.img2.acsta.net/pictures/17/09/29/21/15/4233147.jpg",
      nombre: "FLASH",
      mensaje: "Detalles",
      genero: "comics",
    },

    {
      id: 2,
      imagen:
        "https://r3.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic4.abc.es%2Fmedia%2Fcapitulos%2F000%2F150%2F257%2Fepisodio-11-1.jpg&nuevoancho=683&medio=abc",
      nombre: "ARROW",
      mensaje: "Detalles",
      genero: "comics",
    },

    {
      id: 3,
      imagen:
        "https://1.bp.blogspot.com/-toGSP3ivu3M/XOvuj1m-JYI/AAAAAAABUXQ/erR-cEjQ4uAFmYzU-rHQvek4CtUW1axogCLcBGAs/s1600/Supergirl%2Bseason%2B4%2B%25280%2529.jpg",
      nombre: "SUPERGIRL",
      mensaje: "Detalles",
      genero: "comics",
    },
  ];

  
  return (
    
        <div className="container">
            <div className="row p-0 m-0">
           
            {comics.map((peli,index)=>(
                    <Item nombre={peli.nombre} mensaje={peli.mensaje} imagen={peli.imagen} id={peli.id}/>
                    ))
                    
            }
            </div>
            
        
        </div>
     
   
  )
}

export default Comics;
