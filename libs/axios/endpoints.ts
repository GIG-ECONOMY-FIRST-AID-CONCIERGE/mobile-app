import http from './http';
import { AccidentModel } from './model';

class ApiService {
  async sendAccident(data: AccidentModel) {
    return http.post<AccidentModel>('/api/Accident', data);
  }
}

export default new ApiService();