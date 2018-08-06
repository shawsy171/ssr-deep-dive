// these Routes are shared by both the client an server
import React from 'react';
import Home from './../client/components/Home';
import UsersList, { loadData } from './../client/components/UsersList';

const AppRoutes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    loadData,
    path: '/users',
    component: UsersList,
  }
];

export default AppRoutes;