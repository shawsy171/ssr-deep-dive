// these Routes are shared by both the client an server
import React from 'react';
import { Routes } from 'react-router-dom';
import { Home } from './client/components/Home';

const Routes = () => (
  <div>
    <Routes exact path="/" component={ Home } />
  </div>
)