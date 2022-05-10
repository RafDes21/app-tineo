import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer'
import Layout from '../layoutComp/Layout'
import ItemDetail from '../components/itemDetail/ItemDetail'
import Comics from '../components/Comics'
import Medicina from '../components/Medicina'

const Routs = () => {
  return (
    <div>
      <BrowserRouter>
         <Routes>
              <Route path='/' element={<Layout/>}>
                <Route index element={<ItemListContainer/>}/>
                <Route path="/detalles/:id" element={<ItemDetail/>}/>
                <Route path="/comics" element={<Comics/>}/>
                <Route path="/medicina" element={<Medicina/>}/>
              </Route>
         </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default Routs