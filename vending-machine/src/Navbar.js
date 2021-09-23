import { NavLink } from "react-router-dom"
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="Navbar-link-container">
            <NavLink exact to="/">
                Home
            </NavLink>
            <NavLink exact to="/chips">
                Chips
            </NavLink>
            <NavLink exact to="/soda">
                Soda
            </NavLink>
            <NavLink exact to="/girlscoutcookies">
                Girl Scout Cookies
            </NavLink>
            </div>

        </nav>
    )

}

export default Navbar