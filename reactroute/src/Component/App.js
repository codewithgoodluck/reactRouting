
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from '../Navbar/Navbar';
import Home from '../Pages/Home';
import Pricing from '../Pages/Pricing';
import Testimonial from '../Pages/Testimonial';
import About from '../Pages/About';

function App() {
  return (
    <div className="Container">
      <Router>
      <Navbar>
      </Navbar>

        <Switch>
        <Route exact path="/" component={Home}>

      
        </Route>
        <Route exact path="/about"  component={About}></Route>
        <Route exact path="/price" component={Pricing}></Route>
        <Route exact path="/testimony"  component={Testimonial}>

          Goodluck
        </Route>
        </Switch>
      </Router>
     

    </div> 
  );
}

export default App;
