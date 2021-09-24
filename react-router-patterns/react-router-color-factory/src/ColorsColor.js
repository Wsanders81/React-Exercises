import { useParams, Link, Redirect } from "react-router-dom";

import './ColorsColor.css'

const ColorsColor = ({colors}) => {
        const {color} = useParams()
        
        const selectedColor = colors.filter(c => c.name === color)

        if(selectedColor.length === 0) {
            return <Redirect to="/colors"/>
        }

        const colorName = selectedColor[0].name.toUpperCase(); 

        return (
            <div className="ColorsColor" style={{backgroundColor:selectedColor[0].rgbValue}}>
            <h1>THIS IS {colorName} ISN'T IT BEAUTIFUL ?!</h1>
            <Link to="/colors">Go Back</Link>
            </div>
        )
}

export default ColorsColor; 