import http from './http';
import { AccidentModel } from './model';

class ApiService {
  sendAccident(data: AccidentModel) {
    return http.post<AccidentModel>('/Accident', data).then((response) => {
      console.log('response', response);
    }).catch((err) => {
      console.log('err', err);
    });
  }
}

export default new ApiService();