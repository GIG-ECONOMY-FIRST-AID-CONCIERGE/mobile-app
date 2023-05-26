import http from './http';
import { AccidentModel } from './model';

class ApiService {
  async sendAccident(data: AccidentModel) {
    console.log(data);

    return http.post<AccidentModel>('/Accident', data).then((response) => {
      return { data: response.data };
    }).catch(() => {
      return { data: null, error: true }
    });
  }
}

export default new ApiService();