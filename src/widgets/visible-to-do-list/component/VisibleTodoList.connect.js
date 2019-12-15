import { connect } from 'react-redux';
import {getInstance} from '../../../sdk';
import VisibleToDoListComponent from './VisibleToDoList.component';

const VisibleToDoListApi = getInstance().VisibleToDoListApi;

const mapStateToProps = () => ({
	todos: VisibleToDoListApi.getVisibleToDosSelector(),
	editToDo: VisibleToDoListApi.getEditToDoSelector()
});

const mapDispatchToProps = () => ({
	toggleTodo: VisibleToDoListApi.toggleTodo,
	addTodo: VisibleToDoListApi.addTodo,
	changeEditValue: VisibleToDoListApi.changeEditValue
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(VisibleToDoListComponent);
