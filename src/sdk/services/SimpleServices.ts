import BaseService, {requestType} from './BaseService';
import MockService from './MockService';
import commonConfig from '../config';

class SimpleServices {
  private serviceBase: typeof MockService | typeof BaseService;
  constructor() {
    this.serviceBase = commonConfig.useMocks ? MockService : BaseService;
  }

  getDummyPostsUrl = () => ('https://jsonplaceholder.typicode.com/posts');

  getDummyPosts = ({config}: requestType) => (this.serviceBase.ajax.get({url: this.getDummyPostsUrl(), config}));
}

export default new SimpleServices();
