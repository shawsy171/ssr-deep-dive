import axios from 'axios';

// here we create a custom instance of axios for use on the client
export const createAxiosInstance = axios.create({
  baseURL: '/api'
});