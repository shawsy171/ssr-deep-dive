import { FETCH_CURRENT_USERS } from './actions';

const initialState = null;

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_CURRENT_USERS:
      return action.payload.data || false;

    default:
      return state;
  }
}

export default authReducer;