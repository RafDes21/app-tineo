import React,{useState} from 'react'
import {useLocation, useParams} from 'react-router-dom'

import Producto from '../Producto'



const ItemDetail = () => {
  
  
  
   const Location = useLocation()
   const params = useParams()
   
   return (
  
    <div>
       
       <Producto id={`${params.id}`}/>
       
    </div>
   )
}

export default ItemDetail