import React from 'react'
import Item from "./item/Item"

const Medicina = () => {

    const medicina = [
        
        { id:4, imagen:"https://dib.com.ar/wp-content/uploads/2020/03/dr-house.jpg", nombre: "DR. HOUSE",  mensaje:"Detalles", genero:"medicina" },
    
        { id:5, imagen:"https://la.sonychannel.com/sites/la.set/files/styles/image_386x579/public/ct_series_f_poster_art/the_good_doctor.png?itok=2-knN9gf", nombre: "THE GOOD DOCTOR",  mensaje:"Detalles", genero:"medicina" },
    
        { id:6, imagen:"https://la.sonychannel.com/sites/la.set/files/styles/image_386x579/public/ct_series_f_poster_art/2.jpg?itok=_79Tbtvn", nombre: "GREY'S ANATOMY",  mensaje:"Detalles", genero:"medicina" },
      ];

  return (
    <div className="container">
        <div className="row p-0 m-0">

        {medicina.map((peli,index)=>(
                    <Item nombre={peli.nombre} mensaje={peli.mensaje} imagen={peli.imagen} id={peli.id}/>
                    ))
                    
            }
        
        </div>
    </div>
  )
}

export default Medicina