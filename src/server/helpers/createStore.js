import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from '../../shared/store/storeConfig';

import { createAxiosInstance } from './api';

const initalState = {};

const createReduxStore = (req) => {
  // here we create a custom instance of axios for use on the server
  const axiosInstance = createAxiosInstance(req);
  // withExtraArgument allows us to pass an argument to are action creator
  const store = createStore(reducers, initalState, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

  return store;
};

export default createReduxStore;