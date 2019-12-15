import {ActionTypes} from './VisibleToDoListApi';
const initialState = {
	toDos: []
};
const reducer = (state = initialState, action) => {
	let newState = {...state};
	switch (action.type) {
	case ActionTypes.ADD_TODO:
		newState = {
			...state,
			toDos: [...state.toDos, {id: action.id, text: action.text}]
		};
		break;
		case ActionTypes.TOGGLE_TODO: {
			const newTodos = state.toDos.map((t) => {
				if (t.id === action.id) {
					t.completed = true;
				}
				return t;
			});
			newState = {...state, toDos: newTodos};
			break;
		}
	default:
		return newState;
	}
	return newState;
};

export default reducer;
