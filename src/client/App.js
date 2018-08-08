import React from 'react';
import { renderRoutes } from 'react-router-config'

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

export default {
  component: App
}