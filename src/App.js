import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = "/main" element={<Main></Main>}></Route>
        <Route path = "/menu" element={<Menu></Menu>}></Route>
        <Route path = "/product/:brandName" element={<Product></Product>}></Route>
        <Route path= "/*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;