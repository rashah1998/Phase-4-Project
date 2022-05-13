import {Link} from "react-router-dom"
import "../styles/LocationItem.css"

function LocationItem({location}) {
    const {id, name, city, state, number_of_seats, image_url} = location
    
    return(
        <div className="location-item">
            <h1>{name}</h1>
            <p>{city}, {state}</p>
            <p>Number of Seats: {number_of_seats}</p>
            <img src={image_url} alt={name}></img>
            <br></br>
            <Link to={`/Venues/${id}`}><p>Read More</p></Link>
        </div>
    )
}

export default LocationItem;