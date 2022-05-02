import React from 'react'
import ItemList from './ItemList'

const Item = ({pelicula}) => {
  
  
    return (
    <div classNameName="container"style={{ display: "flex", flexDirection:"row", justifyContent:"space-around" }}>
        
        
        {pelicula.length > 0 ? pelicula.map((peli,index)=>(
            <div >
             <ItemList nombre={peli.nombre} mensaje={peli.mensaje} imagen={peli.imagen}/>
            </div>
            
        )):
            <h1>cargando<i class="fa-solid fa-spinner"></i></h1>
        }
        
    </div>
  )
}

export default Item