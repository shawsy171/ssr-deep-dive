export const FETCH_ADMINS = 'fetch_admins';

export const fetchAdmins = () => async (dispatch, getState, api) => {
  const response = await api.get('/admins');

  dispatch({
    type: FETCH_ADMINS,
    payload: response
  });
};