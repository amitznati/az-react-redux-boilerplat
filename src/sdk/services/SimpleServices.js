import BaseService from '../../framework/BaseService';

class SimpleServices {
	constructor(){
		this.serviceBase = BaseService;
	}

	getDummyPosts = () => {
		return this.serviceBase.ajax.get({url: 'https://my-json-server.typicode.com/typicode/demo/posts'});
	}

}

export default new SimpleServices();
