import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home'
import Service from './Component/Service';
import Contact from './Component/Contact';
import Login from './Component/Login';
import Create from './Component/Create';

const App=()=> {
  return (
    <div className="App">
      <Router>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}> </Route>
          <Route path='/service' element={<Service/>}> </Route>
          <Route path='/contact' element={<Contact/>}> </Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='/create' element={<Create/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
