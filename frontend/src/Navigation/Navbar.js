import React from "react"
import { NavLink } from "react-router-dom"

function NavBar() {

    return (

        <nav className="navbar navbar-expand-lg">
                <ul className="navbar-nav">
                    <li className="nav-item mx-5"><NavLink to="/">Home</NavLink></li>
                    <li className="nav-item mx-5"><NavLink to="/signup">Signup</NavLink></li>
                    <li className="nav-item mx-5"><NavLink to="/users">Admin</NavLink></li>
                </ul>
        </nav>
    );
}

export default NavBar;