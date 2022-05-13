import '../styles/TicketItem.css'
import {useState} from 'react'

function TicketItem({show, ticketCount, user}) {

    const [numTickets, setNumTickets] = useState(ticketCount)
    
    function handleBuy(e) {
        const ticket = {
            user_id: user.id,
            show_id: show.id
        }

        fetch("/tickets",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(ticket)
        })
        .then(res => res.json())
        .then(boughtTicket => {setNumTickets(numTickets+1)
            console.log(boughtTicket)})
    }
    
    function handleRefund(e) {
        fetch(`/shows/${show.id}`,{
            method:"DELETE"
        }).then(() =>setNumTickets(numTickets-1) )
    }
    return(
        <div className='ticket-item'>
            <div className='ticket-show-info'>
                <h3>{show.comedian.name}</h3>
                <h3>{show.location.name}</h3>
                <h3>{show.date_time}</h3>
            </div>
            <div className="ticket-buy-refund">
                <button className='ticket-buy-button' onClick={(e) => handleBuy(e)}>Buy Ticket</button>
                <button className='ticket-refund-button' onClick={(e) => handleRefund(e)}>Refund Ticket</button>
                <h3>You own {numTickets} tickets to this show!</h3>
            </div>
        </div>
    )
}

export default TicketItem