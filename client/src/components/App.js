import '../App.css';
import Nav from "./Nav"
import Home from "./Home"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Locations from "./Locations"
import Login from "./Login"
import Comedians from "./Comedians"
import Shows from "./Shows"
import {useEffect, useState} from "react"

function App() {
 
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [shows, setShows] = useState([])

  useEffect(() => {
    fetch('/authorized_user')
    .then(res => {
      if(res.ok) {
        res.json()
        .then(user => {
          setIsAuthenticated(true)
          setUser(user)})
      }
    })

    fetch('/shows')
    .then(res => res.json())
    .then(showData => setShows(showData))
  }, []);
  
  return (
    <Router>
    <div className="App">
      <Nav isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser}/>
      <Switch>
        <Route exact path="/">
          <Home />
          <Shows shows={shows}/>
        </Route>
        <Route path="/Locations">
          <Locations />
        </Route>
        <Route path="/Comedians">
          <Comedians />
        </Route>
        <Route path="/Login">
          <Login setUser={setUser} setIsAuthenticated={setIsAuthenticated}/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
