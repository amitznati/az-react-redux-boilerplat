import axios from 'axios';

export type requestType = {
    url: string;
    data?: any;
    config?: any;
}
class BaseService {
  get = ({url, config}: requestType) => {
    return axios.get(url, {params: {...config}});
  };

  post = ({url, data, config}: requestType) => {
    return axios.post(url, data, config);
  };

  put = ({url, data, config}: requestType) => {
    return axios.put(url, data, config);
  };

  delete = ({url, config}: requestType) => {
    return axios.delete(url, config);
  };

  get ajax() {
    return {
      get: this.get,
      post: this.post,
      put: this.put,
      delete: this.delete,
    };
  }
}

export default new BaseService();
