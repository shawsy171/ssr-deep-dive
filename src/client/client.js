// start up point for the client side application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import store from './createStore';

// components
import AppRoutes from './../shared/AppRoutes';

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);