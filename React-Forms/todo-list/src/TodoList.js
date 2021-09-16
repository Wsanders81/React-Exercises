import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import {v4 as uuid} from "uuid"

const TodoList = () => {
	const [ todos, setTodos ] = useState([]);

	const createTodo = (todo) => {
		setTodos((todos) => [ ...todos, todo ]);
	};

	const removeTodo = (id) => {
		setTodos((todos) => todos.filter((t) => t.id !== id));
	};
	return (
		<div>
			<NewTodoForm createTodo={createTodo} />
			{todos.map(({todo, id}) => 
            <Todo text={todo} removeTodo={removeTodo} key={id} id={id}/>)}
		</div>
	);
};

export default TodoList;
