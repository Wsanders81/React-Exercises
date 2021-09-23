
import { Link } from "react-router-dom";
import './Pages.css'

const Soda = () => {
    return (
        <div className="Main">
            <h1>Thirsty??</h1>
            <img
            alt="gross flavored soda"
            src="https://acimg.auctivacommerce.com/imgdata/0/2/3/4/5/2/webimg/13745782.jpg"
            />
            <div className="Main-link">
            <Link to="/">
                Go Back
            </Link>
            </div>
        </div>
    )
}

export default Soda; 