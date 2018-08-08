// ACTION TYPES
export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';

// ACTION CREATORS
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const response = await api.get('/current_user');

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: response
  })
}
