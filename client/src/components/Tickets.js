import {useEffect, useState} from 'react'
import TicketItem from './TicketItem'
import '../styles/Tickets.css'

function Tickets({user}){
    const [shows, setShows] = useState([])
    
    useEffect(() => {
        fetch(`/users/${user.id}`)
        .then(res => res.json())
        .then(showData => setShows(showData))
    },[])

    const counts = {};
    for (const show of shows) {
        counts[show.id] = counts[show.id] ? counts[show.id] + 1 : 1;
    }
    
    let uniqueShows = [...new Map(shows.map((item) => [item["id"], item])).values()];
      

    const renderTickets = uniqueShows.map(show => <TicketItem key={show.id} user={user} show={show} ticketCount={counts[show.id]}/>)

    return(
        <div id='tickets-container'>
            <h1 id='tickets-list-title'>My Tickets</h1>
            <div id='tickets-list'>
                {shows.length === 0 ? <h1>You don't have any tickets. Buy some!</h1> : renderTickets }
            </div>
        </div>
    )
}

export default Tickets
