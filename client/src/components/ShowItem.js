import {Link} from 'react-router-dom'
import { useState } from 'react'
import "../styles/ShowItem.css"

function ShowItem({show, user}){
    const {date_time,price,comedian,location} = show
    const [ticketBought, setTicketBought] = useState(false)

    function handleBuy(e) {
        const ticket = {
            user_id: user.id,
            show_id: show.id
        }

        fetch("/tickets",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(ticket)
        }).then(() => setTicketBought(true))
        // .then(res => res.json())
        // .then(boughtTicket => console.log(boughtTicket))
    }

    return(
        <div className="show-item">
            <Link to={`/Comedians/${comedian.id}`} className="home-show-comedian-link"><h1 className="comedian-name">{comedian.name}</h1></Link>
            <p className="date_time">Date: {date_time}</p>
            <section className='location'><p className="location">Venue:</p><Link to={`/Venues/${location.id}`} className="home-show-location-link"><p className="location">{location.name}</p></Link><p className="location">- {location.city}, {location.state}</p></section>
            <p className="price">Ticket Price: ${price}</p>
            {user ? <div className='buy-bought-div'><button id='buy-button' onClick={(e) => handleBuy(e)}>Buy Ticket</button>{ticketBought ? <p>Ticket Bought!</p> : null}</div>          
            : <Link to='/Login' className='cannot-buy-link'><button id='cannot-buy-button'>Log in or Sign up to buy tickets!</button></Link>}
        </div>
    )
}

export default ShowItem ;