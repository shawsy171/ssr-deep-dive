// start up point for the client side application
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './../shared/AppRoutes';

ReactDOM.hydrate(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
  , document.getElementById('root')
);