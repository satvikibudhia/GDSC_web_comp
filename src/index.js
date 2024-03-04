import React from 'react';
import ReactDOM from 'react-dom';
import App from './hero';
import Abt from './about_gdsc';
import Do from './gdsc_do';
import './App.css'; 
import './index.css';



ReactDOM.render(
  <React.StrictMode>
    <App/>
    <Abt/>
   <Do/>
  </React.StrictMode>,
  document.getElementById('root')
);
