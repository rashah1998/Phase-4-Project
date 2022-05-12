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
    <div >
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
            <div id='logged-in'> 
                <span id='welcome'>Welcome, {user.first_name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <Link to= '/Tickets'className="nav-link" id="my-tickets">
                    <span>My Tickets</span>
                </Link>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <Link to="/" className="nav-link" id="logout" onClick={handleClick}>
                    <span>Log Out</span>
                </Link> 
            </div>
            :
            <div id='logged-out'>
                <Link to='/Login' className="nav-link" id="login">
                    <span>Log In</span>
                </Link>
                <p id='or'>&nbsp;&nbsp;&nbsp;or&nbsp;&nbsp;&nbsp;</p>
                <Link to='/Signup' className="nav-link" id="signup">
                    <span>Sign Up</span>
                </Link>
            </div>
            }
        </nav>
    </div>
);
}
export default Nav;