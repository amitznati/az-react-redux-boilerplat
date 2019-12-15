import React, {Component} from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

export default class VisibleToDoListComponent extends Component {

	componentDidMount() {
		const {loadDummyPosts} = this.props;
		loadDummyPosts();
	}

	render() {
		const {todos, toggleTodo, addTodo, editToDo, changeEditValue} = this.props;
		return (
			<div>
				<AddTodo {...{addTodo, editToDo, changeEditValue}} />
				<TodoList {...{todos, toggleTodo}} />
			</div>
		);
	}
}
