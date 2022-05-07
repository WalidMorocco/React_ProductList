import './index.css';
import App from './App';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import FetchingData  from './components/FetchingData';
import FetchingDataId  from './components/FetchingDataId';
import Home from './components/Home';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="products" element={<FetchingData />} />
          <Route path="products/:id" element={<FetchingDataId />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);