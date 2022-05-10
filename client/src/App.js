import './App.css';
import Nav from "./Nav"
import Home from "./Home"
import { BrowserRouter as Router,Switch,Route, Routes } from "react-router-dom"
import Locations from "./Locations"
import Login from "./Login"
import Comedians from "./Comedians"

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
        <Route path="/" exact component={Home}/>
        <Route path="/Locations" exact component={Locations}/> 
        <Route path="/Comedians" exact component={Comedians}/>
        <Route path="/Login" exact component={Login}/>
    </div>
    </Router>
  );
}

export default App;
