import BaseService from './BaseService';
import MockService from './MockService';
import commonConfig from '../config';

class SimpleServices {
  constructor() {
    this.serviceBase = commonConfig.useMocks ? MockService : BaseService;
  }

	getDummyPostsUrl = () => ('https://jsonplaceholder.typicode.com/posts');

	getDummyPosts = ({config}) => (this.serviceBase.ajax.get({url: this.getDummyPostsUrl(), config}));
}

export default new SimpleServices();
