import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ItemListContainer from '../components/ItemListContainer'
import Layout from '../layoutComp/Layout'
import ItemDetail from '../components/itemDetail/ItemDetail'

const Routs = () => {
  return (
    <div>
      <BrowserRouter>
         <Routes>
              <Route path='/' element={<Layout/>}>
               
                <Route path="/lista" element={<ItemListContainer/>}/>
                <Route path="/detalles/:id" element={<ItemDetail/>}/>
              </Route>
         </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default Routs