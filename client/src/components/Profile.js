import {useState} from 'react'
import '../styles/Profile.css'

function Profile({user, setUser}) {
    const [editing, setEditing] = useState(false)
    const [error, setError] = useState(null)
    const [editProfileParams, setEditProfileParams] = useState({
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username
    })

    function handleClick() {
        setEditing(true)
    }

    function handleSubmit(e) {
        e.preventDefault()

        fetch(`/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(editProfileParams)
        }).then(res => {
            if(res.ok) {
                res.json()
                .then((user) => {
                    setUser(user)
                    setEditing(false)
                })
            } else {
                res.json()
                .then(json => {setError(json.error)})
            }
        })
    }

    const userData = (
        <div>
            <h1>{user.first_name}'s Profile:</h1>
            <h3>Name: {user.first_name} {user.last_name}</h3>
            <h3>Username: {user.username}</h3>
            <button onClick={handleClick}>Edit Profile</button>
        </div>
    )

    const editUserData = (
        <form onSubmit={(e) => handleSubmit(e)}>
            <p>First Name</p>
            <input type="text" id="firstname-edit" name='first_name'placeholder="Enter First Name" value={editProfileParams.first_name} onChange={e => setEditProfileParams({...editProfileParams, [e.target.name]: e.target.value})} required></input>
            <p>Last Name</p>
            <input type="text" id="lastname-edit" name='last_name'placeholder="Enter Last Name" value={editProfileParams.last_name} onChange={e => setEditProfileParams({...editProfileParams, [e.target.name]: e.target.value})} required></input>
            <p>Username</p>
            <input type="text" id="username-edit" name='username'placeholder="Enter New Username" value={editProfileParams.username} onChange={e => setEditProfileParams({...editProfileParams, [e.target.name]: e.target.value})} required></input>
            <input type='submit' value="Submit Changes" id='submit-user-changes'></input>
            {error ? <p>{error}</p> : null}
        </form>
    )
    return(
        <div id='user-data'>
            {editing ? editUserData : userData}
        </div>
    )
}

export default Profile;