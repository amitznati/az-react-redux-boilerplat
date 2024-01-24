import BaseService, { requestType } from "./BaseService";
import MockService from "./MockService";
import commonConfig from "../config";

class SimpleServices {
  private serviceBase: typeof MockService | typeof BaseService;
  constructor() {
    this.serviceBase = commonConfig.useMocks ? MockService : BaseService;
  }

  getUrl = (path: string) => `${commonConfig.baseUrl}/${path}`;

  getDummyPosts = ({ config }: requestType) =>
    this.serviceBase.ajax.get({ url: this.getUrl('posts'), config });

  login = ({data}: {data: {username: string, password: string}}) => {
    return this.serviceBase.ajax.post({ url: this.getUrl('login'), data });
  }
}

const simpleService = new SimpleServices();
export default simpleService;
