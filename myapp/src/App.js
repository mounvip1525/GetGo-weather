import logo from './logo.svg';
import './App.css';
import { Switch , Route , NavLink } from 'react-router-dom'
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink exact to="/" activeClassName="selected">Home</NavLink>
        <NavLink exact to="/about" activeClassName="selected">About</NavLink>
        <NavLink exact to="/services" activeClassName="selected">Services</NavLink>
        <NavLink exact to="/contact"  activeClassName="selected">Contact</NavLink>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
      </Switch>
    </div>
  );
}

export default App;
