import * as React from 'react';
import { Link} from 'react-router-dom';
import Main from './Main';
export default function App() {
  return (
    <>  
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/rotate'>Rotate</Link></li>
          <li><Link to='/adjust'>Adjust</Link></li>
        </ul>
        <hr />
        <Main />       
      </div>   
    </>
  )
}