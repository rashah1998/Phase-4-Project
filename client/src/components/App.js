import '../App.css';
import Nav from "./Nav"
import Home from "./Home"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Locations from "./Locations"
import Login from "./Login"
import Comedians from "./Comedians"
import Shows from "./Shows"
import ComedianPage from './ComedianPage';
import {useEffect, useState} from "react"
import LocationPage from './LocationPage';

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
          <Shows shows={shows}/>
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
        <Route path="/Login">
          <Login setUser={setUser} setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} user={user}/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
