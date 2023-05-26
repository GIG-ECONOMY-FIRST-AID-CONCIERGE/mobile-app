import axios, { AxiosInstance } from 'axios';

// ENVS
import { API_ENDPOINT } from '@env';

const apiClient: AxiosInstance = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
