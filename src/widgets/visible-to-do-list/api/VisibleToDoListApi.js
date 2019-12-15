import BaseApi from '../../../sdk/BaseApi';
import selectors from './VisibleToDoListSelectors';

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const ActionTypes = {
	UPDATE_TODO: 'UPDATE_TODO',
	ADD_TODO: 'ADD_TODO',
	CHANGE_EDIT_TODO: 'CHANGE_EDIT_TODO'
};
let nextTodoId = 0;
export default class VisibleToDoListApi extends BaseApi {

	changeEditValue = (value) => {
		this.dispatchStoreAction({
			type: ActionTypes.CHANGE_EDIT_TODO,
			payload: value
		});
	};

	addTodo = () => {
		const text = this.getEditToDoSelector();
		this.dispatchStoreAction({
			type: ActionTypes.ADD_TODO,
			payload: {id: nextTodoId++, text}
		});
	};

	toggleTodo = (id) => {
		const todos = this.getVisibleToDosSelector();
		const newTodos = todos.map((t) => {
			if (t.id === id) {
				t.completed = !t.completed;
			}
			return t;
		});
		this.dispatchStoreAction({
			type: ActionTypes.UPDATE_TODO,
			payload: newTodos
		});
	};



	/* Selectors */
	getVisibleToDosSelector = () => {
		return selectors.getToDosSelector(this.store.getState());
	};

	getEditToDoSelector = () => {
		return selectors.getEditToDoSelector(this.store.getState());
	};
}
