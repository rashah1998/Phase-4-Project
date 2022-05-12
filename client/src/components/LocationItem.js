import {Link} from "react-router-dom"

function LocationItem({location}) {
    const {id, name, city, state, number_of_seats, website_url, image_url, shows} = location
    return(
        <div className="location-item">
            <h1>{name}</h1>
            <p>{city}, {state}</p>
            <img src={image_url}></img>
            <br></br>
            <Link to={`/Venues/${id}`}><p>Read More</p></Link>
        </div>
    )
}

export default LocationItem;