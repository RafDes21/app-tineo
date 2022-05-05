import React, { useState, useEffect} from 'react'
import ItemDetail from './itemDetail/ItemDetail'

const ItemDetailContainer = () => {
   
  const [series, setSeries]=useState([])

  const detalles = [{
      id:1,
      imagen:"https://www.cinemascomics.com/wp-content/uploads/2020/06/the-flash-septima-temporada-godspeed.jpg",
      titulo:"FLASH",
      precio:"$300",
      temporadas:"6 Temporadas",
      sinopsis:"Un policía forense llamado Barry Allen (Grang Gustin) consigue el don de una velocidad sobrehumana tras ser golpeado por un rayo al tiempo que explota un acelerador de partículas. Tras unos meses en coma, Barry descubre esa habilidad que utiliza para luchar contra el crimen con el nombre de Flash"
    },{
      id:2,
      imagen:"https://dam.smashmexico.com.mx/wp-content/uploads/2018/04/24160452/arrow-despide-personaje-principal-willa-holland.jpg",
      titulo:"ARROW",
      precio:"$400",
      temporadas:"7 Temporadas",
      sinopsis:"Después de un violento naufragio y tras haber desaparecido y creído muerto durante cinco años, el multimillonario playboy Oliver Queen es rescatado con vida en una isla del Pacífico. De vuelta en casa en Starling City, es recibido por su madre, su hermana y su mejor amigo"
    
     
    },{
      id:3,
      imagen:"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2022/03/batman-2639953.jpg?itok=BmnxjlIu",
      titulo:"BATMAN",
      precio:"$1300",
      temporadas:"ESTRENO",
      sinopsis:"Dos años acechando las calles como Batman, infundiendo el miedo en los corazones de los criminales, han llevado a Bruce Wayne a lo más profundo de las sombras de Gotham City. Con solo unos pocos aliados de confianza -Alfred Pennyworth y el teniente James Gordon- entre la corrupta red de funcionarios."
    }]
  
  useEffect(() => {
   
       const mostrarSeries = new Promise((resolve, reject)=>{
         
        setTimeout(() => {
            resolve(detalles)
        }, 2000);
       })
       mostrarSeries
       .then((res) => {
         setSeries(res);
       }).catch((err) => console.log("hubo un erro" + err));
   
  }, [])
  
 
   return (
    
    <div>
       
        <ItemDetail series={series}/>
    </div>
  )
}

export default ItemDetailContainer