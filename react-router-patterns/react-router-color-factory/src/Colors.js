import { Link } from "react-router-dom";

import './Colors.css'


const Colors = ({colors}) => {
    console.log(colors)
    return (
        <div className="Colors-container">
        <div className="Colors">
        <h3>Welcome to the Color Factory</h3>
        <h2><Link to="/colors/new">Add a Color</Link></h2>
        </div>
        <div className="Colors-color-container">
            <p>OR </p>
            <p>select a color</p>
            {colors.map(color => <div className="Colors-link"><Link key={color.name} to={`/colors/${color.name}`}>{color.name}</Link></div>)}
        </div>
        </div>
    )

}

export default Colors; 