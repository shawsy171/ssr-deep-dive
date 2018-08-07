import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './../shared/store/storeConfig';
import axios from 'axios';

// here we create a custom instance of axios for use on the client
const axiosInstance = axios.create({
  baseURL: '/api'
});

const initalState = window.INITIAL_STATE;

// withExtraArgument allows us to pass an argument to are action creator
const store = createStore(reducers, initalState, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

export default store;