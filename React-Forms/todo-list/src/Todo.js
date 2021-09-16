import React from 'react';
import "./Todo.css"
const Todo = ({ text, id, removeTodo }) => {

    const remove = () => {removeTodo(id)}

	return (
        <div className="Todo">
        {text}
        <button onClick={remove}>REMOVE</button>
        </div>
)
};

export default Todo;
