import mocks from './mocks';
import {requestType} from "./BaseService";
/* eslint-disable no-unused-vars */
class MockAxios {
  get = (url: string, payload: any) => {
    // @ts-ignore
    return mocks[url];
  };
  post = (url: string, data: any, config: any) => {
    return {};
  };


  put = (url: string, data: any, config: any) => {
    return {};
  };

  delete = (url: string, config: any) => {
    return {};
  };
}

class MockService {
  private mockAxios: MockAxios;
  constructor() {
    this.mockAxios = new MockAxios();
  }
  get = ({url, config}: requestType) => {
    return this.mockAxios.get(url, {params: {...config}});
  };

  post = ({url, data, config}: requestType) => {
    return this.mockAxios.post(url, data, config);
  };

  put = ({url, data, config}: requestType) => {
    return this.mockAxios.put(url, data, config);
  };

  delete = ({url, config}: requestType) => {
    return this.mockAxios.delete(url, config);
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

export default new MockService();
