import {Link} from 'react-router-dom'
import "../styles/ComediansList.css"

function ComediansList({comedian}){
    const {id, name,image_url} = comedian

    return(
        <div className="comedians-list">
            <h1>{name}</h1>
            <img src={image_url} alt={name}></img>
            <br></br>
            <Link to={`/Comedians/${id}`}><p>About Me & Upcoming Shows</p></Link>
        </div>
    )
}
export default ComediansList;