// these Routes are shared by both the client an server
// import React from 'react';
import App from './../../client/App';
import HomePage from './../../client/pages/HomePage';
import UsersListPage from './../../client/pages/UsersListPage';
import NotFoundPage from './../../client/pages/NotFoundPage';
import AdminsListPage from './../../client/pages/AdminsListPage';

const AppRoutes = [
  {
    ...App,
    // these routes are accessible in the App component
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        // UsersListPage is an object which contains the component and the loadData Function
        ...UsersListPage,
        path: '/users',
      },
      {
        ...AdminsListPage,
        path: '/admins'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];

export default AppRoutes;