import React from 'react';
import { renderRoutes } from 'react-router-config'
import { fetchCurrentUser } from './../shared/store/auth/actions';

// components
import Header from './components/Header';

// route is coming from 'react-router-config' supplied in AppRoutes.js
const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  )
}
const loadData = (store) => store.dispatch(fetchCurrentUser());

export default {
  loadData,
  component: App
}