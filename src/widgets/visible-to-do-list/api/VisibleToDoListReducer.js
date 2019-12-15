import {ActionTypes} from './VisibleToDoListApi';
const initialState = {
	toDos: [],
	editToDo: ''
};
const reducer = (state = initialState, action) => {
	let newState = {...state};
	const payload = action && action.payload;
	const type = action && action.type;
	switch (type) {
		case ActionTypes.ADD_TODO:
		newState = {
			...state,
			editToDo: '',
			toDos: [...state.toDos, {...payload}]
		};
		break;
	case ActionTypes.UPDATE_TODO: {
		newState = {...state, toDos: [...payload]};
		break;
	}
	case ActionTypes.CHANGE_EDIT_TODO:
		newState = {...state, editToDo: payload};
		break;
	default:
		return newState;
	}
	return newState;
};

export default reducer;
