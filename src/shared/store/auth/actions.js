// ACTION TYPES
export const FETCH_CURRENT_USERS = 'FETCH_CURRENT_USERS';

// ACTION CREATORS
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const response = await api.get('/current_user');

  dispatch({
    type: FETCH_CURRENT_USERS,
    payload: response
  });
};
