import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import LocationPageShow from './LocationPageShow';
import "../styles/LocationPage.css"

function LocationPage() {
    const {id} = useParams();
    const [location, setLocation] = useState({})
    const [locationShows, setLocationShows] = useState([])

    useEffect(() => {
        fetch(`/locations/${id}`)
        .then(res => res.json())
        .then(locationData => {setLocation(locationData)
            setLocationShows(locationData.shows)
        })
    }, [])

    const renderShows = locationShows.map(show => <LocationPageShow key={show.id} show={show}/>)

    // id, name, city, state, number_of_seats, website_url, image_url, shows

    return(
        <div className='what'>
            <div className='location-page'>
                <img src={location.image_url} ></img>
                <h1>{location.name}</h1>
                <p>{location.city}, {location.state}</p>
                <br></br>
                <a href={location.website_url}>{location.name}'s Website</a>
            </div>
            <div className="upcoming-show" autoscroll="true">
                <h1>Upcoming Shows at {location.name}:</h1>
                {renderShows}
            </div>
        </div>
    )
}

export default LocationPage;