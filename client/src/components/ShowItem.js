import {Link} from 'react-router-dom'
import "../styles/ShowItem.css"

function ShowItem({show, user}){
    const {date_time,price,comedian,location} = show

    function handleBuy(e) {
        const ticket = {
            user_id: user.id,
            show_id: show.id
        }

        fetch("/tickets",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(ticket)
        }).then(res => res.json())
        .then(boughtTicket => console.log(boughtTicket))
    }

    return(
        <div className="show-item">
            <Link to={`/Comedians/${comedian.id}`} className="home-show-links"><h1 className="comedian-name">{comedian.name}</h1></Link>
            <p className="date_time">Date: {date_time}</p>
            <p className="location">Venue: </p><Link to={`/Venues/${location.id}`} className="home-show-links"><p className="location">{location.name}</p></Link><p className="location"> - {location.city}, {location.state}</p>
            <p className="price">Ticket Price: ${price}</p>
            {user ? <button id='buy-button' onClick={(e) => handleBuy(e)}>Buy Ticket</button> : <button id='cannot-buy-button'>Log in to Buy a Ticket!</button>}
        </div>
    )
}

export default ShowItem ;