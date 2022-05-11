import "../styles/ComediansList.css"

function ComediansList({comedian}){
    const {name,about_info,website_url,image_url} = comedian

    return(
        <div className="comedians-list">
        <h1>{comedian.name}</h1>
        <p>{comedian.about_info}</p>
        <img src={comedian.image_url} ></img>
        <br></br>
        <a href={comedian.website_url}>Read More</a>
        </div>
    )
}
export default ComediansList;