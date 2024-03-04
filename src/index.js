import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './home';
import Abt from './about_gdsc';
import Do from './gdsc_do';
import Team from './team';
import './App.css'; 
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<Abt />} />
        <Route path="/gdsc_do" element={<Do />} />
        <Route path="/team" element={<Team />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
