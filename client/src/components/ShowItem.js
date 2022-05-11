import {Link} from 'react-router-dom'
import "../styles/ShowItem.css"

function ShowItem({show}){
    const {date_time,price,comedian,location} = show

    return(
        <div className="show-item">
            <Link to={`/Comedians/${comedian.id}`}><h1 className="comedian-name">{comedian.name}</h1></Link>
            <p className="date_time">Date: {date_time}</p>
            <p className="location">Location: {location.name} - {location.city}, {location.state}</p>
            <br></br>
        </div>
    )
}

export default ShowItem ;