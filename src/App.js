import React from 'react';
import './App.css';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notfound from './pages/Notfound';
import DetailPage from './pages/DetailPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {
            <>
            <Header/>
            <MainPage/>
            </>
          }/>
          <Route path="/detail/:imageId" element={<DetailPage/>}/>
          <Route path= "*" element={<Notfound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
