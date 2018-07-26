// start up point for the client side application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

// router
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

// redux
import { Provider } from 'react-redux';
import store from './createStore';
import AppRoutes from './../shared/AppRoutes';

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
    <div>{renderRoutes(AppRoutes)}</div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);