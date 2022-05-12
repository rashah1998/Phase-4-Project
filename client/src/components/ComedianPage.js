import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import ComedianPageShow  from './ComedianPageShow';
import "../styles/ComedianPage.css"

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

    const renderShows = comedianShows.map(show => <ComedianPageShow show={show}/>)

    return(
        <div className='background'>
            <div className='comedian-page'>
                <img src={comedian.image_url} ></img>
                <h1>{comedian.name}</h1>
                <p>{comedian.about_info}</p>
                <a href={comedian.website_url}>{comedian.name}'s Website</a>
            </div>
            <div className='upcoming-show'>
                    <h1>{comedian.name}'s Upcoming Shows:</h1>
                    {renderShows}
            </div>
        </div>
    )
}

export default ComedianPage;