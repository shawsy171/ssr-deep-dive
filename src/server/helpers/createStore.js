import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import { reducers } from '../../shared/store/storeConfig';
import config from './../../shared/config';

const initalState = {};

const createReduxStore = (req) => {
  // here we create a custom instance of axios for use on the server
  const axiosInstance = axios.create({
    baseURL: config.API_URL,
    headers: { cookie: req.get('cookie') || '' }
  })
  // withExtraArgument allows us to pass an argument to are action creator
  const store = createStore(reducers, initalState, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

  return store;
}

export default createReduxStore;