import BaseApi from '../../../sdk/BaseApi';
import selectors from './VisibleToDoListSelectors';

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const ActionTypes = {
	TOGGLE_TODO: 'TOGGLE_TODO',
	ADD_TODO: 'ADD_TODO'
};
let nextTodoId = 0;
export default class VisibleToDoListApi extends BaseApi {

	addTodo = (text) => {
		this.dispatchStoreAction({
			type: 'ADD_TODO',
			id: nextTodoId++,
			text
		});
	};

	toggleTodo = (id) => {
		this.dispatchStoreAction({
			type: ActionTypes.TOGGLE_TODO,
			id
		});
	};

	getVisibleTodos = () => {
		return selectors.getToDosSelector(this.store.getState());
	};
}
