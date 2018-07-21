// these Routes are shared by both the client an server
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './../client/components/Home';

const AppRoutes = () => (
  <div>
    <Route exact path="/" component={ Home } />
    <Route exact path="/hi" component={ () => 'hi' } />
  </div>
);

export default AppRoutes;