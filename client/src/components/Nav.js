import React from "react"
import {Link} from "react-router-dom"
import "../styles/Nav.css";

function Nav({setIsAuthenticated, isAuthenticated, setUser}){

    function handleClick() {
        fetch('/logout', {method: 'DELETE'})
        .then(() => {
          setUser(null)
          setIsAuthenticated(false)
        })
    }

return (
    <div>
        <nav>
            <Link to="/" className="nav-link" >
                <span> Home </span>
            </Link>
            <Link to="/Locations" className="nav-link">
                <span> Venues </span>
            </Link>
            <Link to="/Comedians" className="nav-link">
                <span> Comedians </span>
            </Link>
            {isAuthenticated ? 
            <Link to="/" className="nav-link" onClick={handleClick}>
                <span> Log Out </span>
            </Link> :
            <Link to='/Login' className="nav-link" id="login">
                <span> Login </span>
            </Link>
            }
        </nav>
    </div>
);
}
export default Nav;