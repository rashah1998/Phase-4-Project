function LocationPageShow({show}) {
    //show attributes: date_time, price, comedian{name, about_info, website_url, image_url}
    return(
        <div className="render-show">
            <p>Date: {show.date_time}</p>
            <p>Comedian: {show.comedian.name}</p>
            <p>Price: ${show.price}</p>
        </div>
    )
}

export default LocationPageShow;