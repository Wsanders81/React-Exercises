import { Link } from "react-router-dom";
import './Pages.css'


const GirlScoutCookies = () => {
    return (
        <div className="Main">
            <h1>YOU CAN ONLY BUY GIRL SCOUT COOKIES FROM A LICENSED DEALER!</h1>
            <img
            alt="gross flavored potato chips"
            src="https://i0.wp.com/makingfriends.com/girl-scout-leader/wp-content/uploads/2015/08/mad-daisy-girl-scout.jpg?resize=350%2C200&ssl=1"
            />
            
            <div className="Main-link">
            <Link to="/">
                Go Back
            </Link>
            </div>
        </div>
    )
}

export default GirlScoutCookies; 