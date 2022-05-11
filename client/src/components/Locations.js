import {useEffect, useState} from 'react'
import LocationItem from './LocationItem'

function Locations(){

    const [locations, setLocations] = useState([])

    useEffect(() => {
        fetch('/locations')
        .then(res => res.json())
        .then(locationData => setLocations(locationData))
    },[])

    const renderLocations = locations.map(location => <LocationItem key={location.id} location={location}/>)

    return(
        <div>
            <h1>Venues</h1>
            {renderLocations}
        </div>
    )
}
export default Locations;