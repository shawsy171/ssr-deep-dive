// ACTION TYPES
export const FETCH_USERS = 'FETCH_USERS'

// ACTION CREATORS
// api is are axiosInstance
export const fetchUsers = () => async (dispatch, getState, api) => {
  const response = await api.get('/users');
  dispatch({
    type: FETCH_USERS,
    payload: response
  });
}
