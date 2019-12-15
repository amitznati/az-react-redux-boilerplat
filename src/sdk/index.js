import { createStore } from 'redux';
import { combineReducers } from 'redux';

/* VisibleToDoList */
import VisibleToDoListReducer from '../widgets/visible-to-do-list/api/VisibleToDoListReducer';
import VisibleToDoListApi from '../widgets/visible-to-do-list/api/VisibleToDoListApi';
import VisibleToDoListConfig from '../widgets/visible-to-do-list/api/VisibleToDoListConfig';

let storeInstance;
const createStoreInstance = () => {
	const reducerMap = {
		[VisibleToDoListConfig.sliceName]: VisibleToDoListReducer
	};
	return createStore(combineReducers(reducerMap));
};
export const getStoreInstance = () => {
	if (!storeInstance) {
		storeInstance = createStoreInstance();
	}
	return storeInstance;
};

let instance;
const createInstance = () => {
	return {
		VisibleToDoListApi: new VisibleToDoListApi(getStoreInstance())
	};
};

export const getInstance = () => {
	if (!instance) {
		instance = createInstance();
	}
	return instance;
};


export default {
	getStoreInstance,
	getInstance
}
