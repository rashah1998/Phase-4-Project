import {useState} from "react"

function Login(){
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const [error, setError] = useState(null)

    function submitHandler(e){
        e.preventDefault();

        const user = {
            userName,
            password 
        }
        
        fetch("http://localhost:3000/login",{
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
                    console.log('Logged in!')
                })
            } else {
                res.json()
                .then(json => {setError(json.error)
                console.log('login error!')})
            }
        })

        e.target.reset()
        
    }

    return(
        <div class="login_box">
            <h1>Login Here</h1>
                <form onSubmit={submitHandler}>
                    <div>
                    <p>Username</p>
                    <input type="text" name="userName" placeholder="Enter Username" onChange={e => setUserName(e.target.value)}></input>
                    <p>Password</p>
                    <input type="password" name="password" placeholder="Enter Password" onChange={e => setPassword(e.target.value)}></input>
                    <br></br>
                    <input type="submit" name="" value="Login"></input>
                    </div>
                </form>
        </div>
    )
}
export default Login;