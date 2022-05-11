import "../styles/ShowItem.css"

function ShowItem({show}){
    const {date_time,price,comedian,location} = show

    return(
        <div className="show-item">
            <h1>{comedian.name}</h1>
            <p>{date_time}</p>
            <p>{location.name} - {location.city}, {location.state}</p>
        </div>
    )
}

export default ShowItem ;