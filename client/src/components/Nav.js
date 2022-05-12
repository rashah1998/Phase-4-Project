import React from "react"
import {Link} from "react-router-dom"
import "../styles/Nav.css";

function Nav({setIsAuthenticated, isAuthenticated, setUser, user}){

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
            <Link to="/Venues" className="nav-link">
                <span> Venues </span>
            </Link>
            <Link to="/Comedians" className="nav-link">
                <span> Comedians </span>
            </Link>
            {user ? 
            <Link to="/" className="nav-link" id="logout" onClick={handleClick}>
                <span> {`Welcome, ${user.first_name}`}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Log Out</span>
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