// src/App.js
import React, { useState } from 'react';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';


const App = () => {
   document.body.style.backgroundColor="#F2F4F7";

  return (
  
    <div className=''>
    <Navbar/>
    <Home/>
    
      </div>
    
  );
}

export default App;
