import axios from 'axios';
import config from './../../shared/config';

// export const axiosInstance = axios.create({
//   baseURL: config.API_URL,
//   headers: { cookie: req.get('cookie') || '' }
// });

export const createAxiosInstance = (req) => {
  return axios.create({
    baseURL: config.API_URL,
    headers: { cookie: req.get('cookie') || '' }
  });
};
