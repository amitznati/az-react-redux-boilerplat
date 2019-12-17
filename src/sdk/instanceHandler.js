import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

/* VisibleToDoList */
import VisibleToDoList from '../widgets/visible-to-do-list';

const widgets = [
	VisibleToDoList
];

let storeInstance;
const createStoreInstance = () => {
	const reducerMap = {};
	widgets.forEach((widget) => {
		reducerMap[widget.config.sliceName] = widget.reducer;
	});
	return createStore(
		combineReducers(reducerMap),
		composeWithDevTools()
	);
};
export const getStoreInstance = () => {
	if (!storeInstance) {
		storeInstance = createStoreInstance();
	}
	return storeInstance;
};

let instance;
const createInstance = () => {
	const apis = {};
	widgets.forEach((widget) => {
		const api = widget.api;
		apis[widget.config.apiName] = new api(getStoreInstance());
	});
	return apis;
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
};
