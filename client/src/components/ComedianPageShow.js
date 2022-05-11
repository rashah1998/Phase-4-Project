function ComedianPageShow({show}) {
    return (
        <div>
            <p>Date: {show.date_time}</p>
            <p>Location: {show.location.name} - {show.location.city}, {show.location.state}</p>
            <br></br>
        </div>
    )
}

export default ComedianPageShow;