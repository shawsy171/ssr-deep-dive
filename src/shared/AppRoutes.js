// these Routes are shared by both the client an server
import React from 'react';
import Home from './../client/components/Home';
import UsersList from './../client/components/UsersList';

const AppRoutes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/users',
    component: UsersList,
  }
];

export default AppRoutes;