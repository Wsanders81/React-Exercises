import './Pages.css'
import { Link } from "react-router-dom";


const Chips = () => {
    return (
        <div className="Main">
            <h1>You Have Choose Wisely?</h1>
            <img
            alt="gross flavored potato chips"
            src="https://brightlightgraphics.com/wp-content/uploads/2020/11/toothpaste-juice-1.jpg"
            />
            <div className="Main-link">
            <Link to="/">
                Go Back
            </Link>
            </div>
        </div>
    )
}

export default Chips