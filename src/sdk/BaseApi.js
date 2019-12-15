export default class BaseApi {

	constructor(store) {
		this.store = store;
	}

	dispatchStoreAction = (action) => {
		this.store.dispatch(action);
	}
}
