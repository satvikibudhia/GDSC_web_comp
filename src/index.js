import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './home';
import Nav from './navbar';
import Abt from './about_gdsc';
import Do from './gdsc_do';
import Team from './team';
import Events from './itemcard';
import Footer from './footer';
import Scroll from './scrolltop';
import './App.css'; 
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Nav/>
    <Scroll/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<Abt />} />
        <Route path="/gdsc_do" element={<Do />} />
        <Route path="/team" element={<Team />} /> 
        <Route path="/events" element={< Events/>} /> 
      </Routes>
    </BrowserRouter>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
