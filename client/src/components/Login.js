import {useState} from "react"
import {useHistory} from "react-router-dom"

function Login({setUser, setIsAuthenticated, isAuthenticated, user}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();

    const [error, setError] = useState(null)

    function submitHandler(e){
        e.preventDefault();

        const user = {
            username,
            password 
        }
        
        fetch("/login",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok) {
                res.json()
                .then(user => {
                    setUser(user)
                    setIsAuthenticated(true)
                    history.push("/")
                })
            } else {
                res.json()
                .then(json => {setError(json.error)})
            }
        })

        e.target.reset()
        
    }

    return(
        <div className="login_box">
            <h1>Login Here</h1>
                <form onSubmit={submitHandler}>
                    <div>
                        <p>Username</p>
                        <input type="text" name="username" placeholder="Enter Username" onChange={e => setUsername(e.target.value)}></input>
                        <p>Password</p>
                        <input type="password" name="password" placeholder="Enter Password" onChange={e => setPassword(e.target.value)}></input>
                        <br></br>
                        <input type="submit" name="" value="Login"></input>
                        <br/>
                        {error ? <p>{error}</p> : null}
                        {user ? <p>Login successful! Welcome, {user.first_name}</p> : null}
                    </div>
                </form>
        </div>
    )
}
export default Login;