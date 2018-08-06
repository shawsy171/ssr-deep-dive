import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './../shared/store/storeConfig';

const initalState = window.INITIAL_STATE;

const store = createStore(reducers, initalState, applyMiddleware(thunk));

export default store;