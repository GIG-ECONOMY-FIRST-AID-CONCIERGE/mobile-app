import axios from 'axios';
import http from './http';
import { AccidentModel } from './model';

// ENVS
import { API_KEY_GOOGLE } from '@env';

class ApiService {
  async sendAccident(data: AccidentModel) {
    return http.post<AccidentModel>('/Accident', data).then((response) => {
      return { data: response.data };
    }).catch(() => {
      return { data: null, error: true }
    });
  }

  async getAddressByCoords(lat: number, lng: number) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY_GOOGLE}`);
  }
}

export default new ApiService();