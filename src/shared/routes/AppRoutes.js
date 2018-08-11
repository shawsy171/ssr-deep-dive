// these Routes are shared by both the client an server
// import React from 'react';
import App from './../../client/App';
import HomePage from './../../client/pages/HomePage';
import UsersListPage from './../../client/pages/UsersListPage';

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
      }
    ]
  }
];

export default AppRoutes;