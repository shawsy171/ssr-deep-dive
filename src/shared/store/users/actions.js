import axios from 'axios';
import config from './../../config';

// ACTION TYPES
export const FETCH_USERS = 'FETCH_USERS'

// ACTION CREATORS
export const fetchUsers = () => async (dispatch) => {
  const response = await axios.get(config.API_URL + '/users');
  dispatch({
    type: FETCH_USERS,
    payload: response
  });
}
