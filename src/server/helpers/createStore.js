import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from '../../shared/store/storeConfig';

const initalState = {};

const createReduxStore = () => {
  const store = createStore(reducers, initalState, applyMiddleware(thunk));

  return store;
}

export default createReduxStore;