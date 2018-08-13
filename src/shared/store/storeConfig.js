import { combineReducers } from 'redux';

// reducers
import users from './users/reducer';
import auth from './auth/reducer';
import admins from './admins/reducer';

export const initalState = {};
export const reducers = combineReducers({
  users,
  auth,
  admins
});
