import React, { useState } from 'react';
import {v4 as uuid} from "uuid"
import "./NewTodoForm.css"

const NewTodoForm = ({createTodo}) => {
	const [ formData, setFormData ] = useState([]);

    const handleChange = (e) => {
        const { name , value } = e.target
        setFormData( formData => ({
            ...formData, 
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        createTodo({...formData, id: uuid()})
        setFormData([])
    }

    return (
        <form onSubmit={handleSubmit} className="NewTodoForm">
            <label htmlFor="todo">Todo :</label>
            <input 
                type="text"
                name="todo"
                id="todo"
                placeholder="Enter Todo Here"
                onChange={handleChange}

                />
                <div>
                    <button >Submit</button>
                </div>
        </form>
    )

};

export default NewTodoForm
