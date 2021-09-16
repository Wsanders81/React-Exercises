import React from "react";
import "./Box.css"
const Box = ({ width = 5, height = 5, color = '#322a2a' , deleteBox, id}) => {
const remove = () => {deleteBox(id)}
    return (
        <div className="Box-container">
        <div className="Box" 
        style = {{
            backgroundColor : `${color}`,
            width: `${width}rem`,
            height: `${height}rem`
            }}>
        
        </div>
        <div>
            <button onClick={remove}>REMOVE</button>
        </div>
        </div>
    )
}

export default Box; 