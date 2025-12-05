
import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const TIMEOUT = 60000;
export const ACCESS_TOKEN = 'id_token';

const httpClient: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
  withCredentials: true
});

const responseInterceptor = (response: AxiosResponse) => {
  return response;
};

const errorInterceptor = (error: AxiosError) => {
  switch (error.response && error.response.status) {
    case 401:
      localStorage.removeItem(ACCESS_TOKEN);

      // @ts-ignore
      // window.location = '/login'

      break;
  }

  return Promise.reject(error);
};

httpClient.interceptors.response.use(responseInterceptor, errorInterceptor);

export default httpClient;
