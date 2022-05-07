import React, { useState } from 'react';
import '../App.css';
import { Outlet, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();


  const handleShowFetchDataDemo = () => {
    navigate('/products');
  };


  return (
    <div className="container">
      Navigate through the nav bar to display products list
    </div>
  );
  
}

export default Home;