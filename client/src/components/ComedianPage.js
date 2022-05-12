import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import ComedianPageShow  from './ComedianPageShow';

function ComedianPage() {
    const {id} = useParams();
    const [comedian, setComedian] = useState({})
    const [comedianShows, setComedianShows] = useState([])

    useEffect(() => {
        fetch(`/comedians/${id}`)
        .then(res => res.json())
        .then(comedianData => {setComedian(comedianData)
            setComedianShows(comedianData.shows)
        })
    }, [])

    const renderShows = comedianShows.map(show => <ComedianPageShow key={show.id} show={show}/>)

    return(
        <div>
            <h1>{comedian.name}</h1>
            <p>{comedian.about_info}</p>
            <img src={comedian.image_url} ></img>
            <br></br>
            <a href={comedian.website_url}>{comedian.name}'s Website</a>
            <div>
                <h1>{comedian.name}'s Upcoming Shows:</h1>
                {renderShows}
            </div>
        </div>
    )
}

export default ComedianPage;