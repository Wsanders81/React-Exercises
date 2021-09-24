
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import "./ColorsNew.css"

const ColorsNew = ({handleColorAdd}) => {
    const history = useHistory()

    const INITIAL_STATE = {
        name: "", 
        rgbValue: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData( formData => ({
            ...formData, 
            [name]: value
        }))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        handleColorAdd({...formData})
        history.push('/colors')
    }

    return (
        <div className="ColorsNew">
        <h1>Add a Color</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
            id = "name"
            type = "text" 
            name = "name"
            placeholder = "Color Name"
            value = {formData.name}
            onChange={handleChange}
            required
            /> 
            <label htmlFor="rgbValue">Color</label>
            <input
            id = "rgbValue"
            type = "color" 
            name = "rgbValue"
            placeholder = "Color"
            value = {formData.rgbValue}
            onChange={handleChange}
            required
            /> 
            <button>Submit</button>
            <div className="ColorsNew-link">
            <Link to="/colors">Go Back</Link>
            </div>
        </form>
        </div>
    )

}

export default ColorsNew; 