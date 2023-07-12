
import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
 import Login from './Login';
 import Sign from './Sign';
// import Home from './Home'
import Contact from './Contact'
//import About from './About'
import MAin from './MAin'
//import { Domain } from '@mui/icons-material';
function App() {
  return (
 <BrowserRouter>
 <Routes>
 <Route path="/" element={<Login/>}></Route>
 <Route path="/sign" element={<Sign/>}></Route>
 <Route path="/login" element={<Login/>}></Route>
 <Route path="/MAin" element={<MAin/>}></Route>
 <Route path="/Contact" element={<MAin/>}></Route>
//  </Routes>
// </BrowserRouter>
//<div><MAin/></div>
//<div><Contact/></div>
//<div><About/></div>
  );
}

export default App;
