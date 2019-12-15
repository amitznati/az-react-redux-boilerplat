import { connect } from 'react-redux';
import Component from './VisibleToDoList.component';
import {getInstance} from '../../../sdk';

const VisibleToDoListApi = getInstance().VisibleToDoListApi;

const mapStateToProps = () => ({
  	todos: VisibleToDoListApi.getVisibleTodos()
});

const mapDispatchToProps = () => ({
  	toggleTodo: VisibleToDoListApi.toggleTodo,
	addTodo: VisibleToDoListApi.addTodo
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
