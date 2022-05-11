import {Link} from 'react-router-dom'
import "../styles/ComediansList.css"

function ComediansList({comedian}){
    const {id, name,about_info,website_url,image_url} = comedian

    return(
        <div className="comedians-list">
            <h1>{comedian.name}</h1>
            <p>{comedian.about_info}</p>
            <img src={comedian.image_url}></img>
            <br></br>
            <Link to={`/Comedians/${id}`}><p>Read More</p></Link>
        </div>
    )
}
export default ComediansList;