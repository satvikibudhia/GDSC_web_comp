// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './hero';
import Abt from './about_gdsc';
import './App.css'; 

ReactDOM.render(
  <React.StrictMode>
   <App/>
  <Abt/>
  </React.StrictMode>,
  document.getElementById('root')
);
