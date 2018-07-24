import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducers, initalState } from './../shared/store/storeConfig';

const store = createStore(reducers, initalState, applyMiddleware(thunk));

export default store;