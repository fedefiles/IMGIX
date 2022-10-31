import React from "react"
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Rotate from './Rotate';
import Adjust from './Adjust';
import ImgContext from './ImgContext';

const Main = () => {
return (  
  <ImgContext.Provider value={""}>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/rotate' element={<Rotate/>} />
    <Route path='/adjust' element={<Adjust/>} />
    </Routes>
    </ImgContext.Provider>
);
}
export default Main;