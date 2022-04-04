import './App.css';
import Home from "./Home";
import About from "./About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <Router>
    <div>
        <nav>
          <ul>
            <li>  
              <Link to="/">Home</Link>
            </li>
            <li>  
              <Link to="/About">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/About" component={About}/>
        </Switch>
      </div>
      </Router>
  );
}

export default App;
