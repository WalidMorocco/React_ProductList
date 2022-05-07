import React, { useState } from 'react';
import './App.css';

import FetchingData from './components/FetchingData';
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();


  const handleShowFetchDataDemo = () => {
    navigate('/products');
  };

  const handleShoHome = () => {
    navigate('/');
  };


  return (
  <div >
      <button className="button" onClick={handleShoHome}>
        Home
      </button>
      
      <button className="button" onClick={handleShowFetchDataDemo}>
        Products
      </button>

    <Outlet />
  </div>
  );
  
}

export default App;