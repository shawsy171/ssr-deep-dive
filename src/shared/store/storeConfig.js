import { combineReducers } from 'redux';

// reducers
import users from './users/reducer';
import auth from './auth/reducer';

export const initalState = {};
export const reducers = combineReducers({
  users,
  auth
});
