// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './hero';
import Abt from './about';
import Abt2 from './about2';
import './App.css'; 

ReactDOM.render(
  <React.StrictMode>
   <App/>
  <Abt/>
  <Abt2/>
  </React.StrictMode>,
  document.getElementById('root')
);
