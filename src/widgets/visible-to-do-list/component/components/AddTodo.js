import React from 'react';

const AddTodo = ({ addTodo, editToDo, changeEditValue }) => {
	return (
		<div>
			<div>
				<input
					type="text"
					onChange={e => changeEditValue(e.target.value)}
					value={editToDo}
				/>
				<button onClick={addTodo}>
					Add Todo
				</button>
			</div>
		</div>
	);
};

export default AddTodo;
