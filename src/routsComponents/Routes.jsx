import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../components/Cart";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import Layout from "../layoutComp/Layout";

const Routs = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ItemListContainer />} />
            <Route path="/categorias/:categoria"element={<ItemListContainer />}/>
            <Route path="/detalles/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routs;
