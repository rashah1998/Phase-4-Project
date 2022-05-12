import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import {useEffect, useState} from "react"
import '../App.css';
import Nav from "./Nav"
import Home from "./Home"
import Locations from "./Locations"
import Login from "./Login"
import Comedians from "./Comedians"
import Shows from "./Shows"
import ComedianPage from './ComedianPage';
import LocationPage from './LocationPage';
import SignUp from "./SignUp";
import Tickets from "./Tickets";

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
  
  const [comedians, setComedians] = useState([])
    


  useEffect(() => {
      fetch("/comedians")
          .then((r) => r.json())
          .then((comedian) => {
          setComedians(comedian);
          });
  }, []);

  return (
    <Router>
    <div className="App">
      <Nav isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>
      <Switch>
        <Route exact path="/">
          <Home />
          <Shows shows={shows} user={user}/>
        </Route>
        <Route exact path="/Venues">
          <Locations />
        </Route>
        <Route path="/Venues/:id">
          <LocationPage />
        </Route>
        <Route exact path="/Comedians">
          <Comedians comedians={comedians}/>
        </Route>
        <Route path="/Comedians/:id">
          <ComedianPage />
        </Route>
        <Route path="/Tickets">
          <Tickets />
        </Route>
        <Route path="/Login">
          <Login setUser={setUser} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} user={user}/>
        </Route>
        <Route path="/Signup">
          <SignUp />
        </Route>
      </Switch>
      <div id='footer'>
      </div>
    </div>
    </Router>
  );
}

export default App;
