import axios, { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
  baseURL: process.env?.API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
