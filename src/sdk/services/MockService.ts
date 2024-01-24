import mocks from "./mocks";
import { requestType } from "./BaseService";

const DELAY = 1000;

const wait = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
class MockAxios {
  get = async (url: string, payload: any) => {
    await wait(DELAY);
    return mocks[url];
  };
  post = async (url: string, data: any, config: any) => {
    await wait(DELAY);
    return mocks[url];
  };

  put = async (url: string, data: any, config: any) => {
    await wait(DELAY);
    return {};
  };

  delete = async (url: string, config: any) => {
    await wait(DELAY);
    return {};
  };
}

class MockService {
  private mockAxios: MockAxios;
  constructor() {
    this.mockAxios = new MockAxios();
  }
  get = ({ url, config }: requestType) => {
    return this.mockAxios.get(url, { params: { ...config } });
  };

  post = ({ url, data, config }: requestType) => {
    return this.mockAxios.post(url, data, config);
  };

  put = ({ url, data, config }: requestType) => {
    return this.mockAxios.put(url, data, config);
  };

  delete = ({ url, config }: requestType) => {
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
const mockService = new MockService();
export default mockService;
