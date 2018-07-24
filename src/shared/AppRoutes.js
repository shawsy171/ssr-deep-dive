// these Routes are shared by both the client an server
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './../client/components/Home';
import UsersList from './../client/components/UsersList';
const AppRoutes = () => (
  <div>
    <Route exact path="/" component={ Home } />
    <Route exact path="/users" component={ UsersList } />
  </div>
);

export default AppRoutes;