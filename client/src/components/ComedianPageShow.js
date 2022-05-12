function ComedianPageShow({show}) {
    //show attributes: date_time, price, location{name, city, state, number_of_seats, website_url, image_url} 
    return (
        <div className="render-show">
            <p>Date: {show.date_time}</p>
            <p>Venue: {show.location.name} - {show.location.city}, {show.location.state}</p>
            <p>Price: ${show.price}</p>
        </div>
    )
}

export default ComedianPageShow;