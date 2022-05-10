import React from "react"
import {Link} from "react-router-dom"

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
            <Link to="/">
                <span className="nav_link"> Home </span>
            </Link>
            <Link to="/Locations">
                <span className="nav_link"> Locations </span>
            </Link>
            <Link to="/Comedians">
                <span className="nav_link"> Comedians </span>
            </Link>
            {isAuthenticated ? 
            <Link to="/" onClick={handleClick}>
                <span className="nav_link"> Log Out </span>
            </Link> :
            <Link to='/Login'>
                <span className="nav_link"> Login </span>
            </Link>
            }
        </nav>
    </div>
);
}
export default Nav;