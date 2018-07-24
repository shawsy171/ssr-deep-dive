import { combineReducers } from 'redux';

// reducers
import users from './users/reducer';

export const initalState = {};
export const reducers = combineReducers({
  users
});
