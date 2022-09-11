import axios from 'axios';

export const axiosApiInstance = axios.create();

export const publicApiRequest = ({ method, url, params, data }) => {
  return axios({
    baseURL: 'http://localhost:8000/api/',
    method,
    url,
    headers: { 'Content-Type': 'application/json' },
    params,
    data,
  });
};

export const apiRequest = ({ method, url, params, data }) => {
  return axiosApiInstance({
    baseURL: 'http://localhost:8000/api/',
    method,
    url,
    headers: { 'Content-Type': 'application/json' },
    params,
    data,
  });
};
