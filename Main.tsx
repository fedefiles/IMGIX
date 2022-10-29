import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Rotate from './Rotate';
import Adjust from './Adjust';
const Main = () => {
return (         
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/rotate' element={<Rotate/>} />
    <Route path='/adjust' element={<Adjust/>} />
  </Routes>
);
}
export default Main;