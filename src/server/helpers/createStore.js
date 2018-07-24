import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducers, initalState } from './../../shared/store/storeConfig';

const createReduxStore = () => {
  const store = createStore(reducers, initalState, applyMiddleware(thunk));

  return store;
}

export default createReduxStore;