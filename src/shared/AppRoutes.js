// these Routes are shared by both the client an server
import React from 'react';
import HomePage from './../client/pages/HomePage';
import UsersListPage, { loadData } from './../client/pages/UsersListPage';

const AppRoutes = [
  {
    path: '/',
    component: HomePage,
    exact: true
  },
  {
    loadData,
    path: '/users',
    component: UsersListPage,
  }
];

export default AppRoutes;