import React, { useState } from "react";
import './NewBoxForm.css'
import {v4 as uuid} from "uuid"


const NewBoxForm = ({ createBox }) => {

    const INITIAL_STATE = {
        width: "", 
        height: "", 
        backgroundColor: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const { name, value } = e.target; 
        setFormData( formData => ({
            ...formData, 
            [name] : value
        }))
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        createBox({...formData, id: uuid()})
        setFormData(INITIAL_STATE)
    }
    return (
        <form onSubmit={handleSubmit} className="NewBoxForm">
            <label htmlFor="width">Width : </label>
            <input
            id = "width" 
            type = "number"
            name = "width"
            placeholder = "width"
            value = {formData.width}
            onChange = {handleChange}
            />
            <label htmlFor="height">Height : </label>
            <input
            id = "height" 
            type = "number"
            name = "height"
            placeholder = "height"
            value = {formData.height}
            onChange = {handleChange}
            />
            <label htmlFor="color">Color : </label>
            <input
            id = "color" 
            type = "color"
            name = "color"
            placeholder = "color"
            value = {formData.color}
            onChange = {handleChange}
            />
            <div>
            <button>Add Box</button>
            </div>
        </form>
    )
}

export default NewBoxForm; 