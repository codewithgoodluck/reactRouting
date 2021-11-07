
import './App.css';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Navbar from '../Navbar/Navbar';
import Home from '../Pages/Home';
// import Keyfeatures from '../Pages/Keyfeatures';
import Pricing from '../Pages/Pricing';
import Testimonial from '../Pages/Testimonial';
import About from '../Pages/About';

function App() {
  return (
    <div className="Container">
      <Router>
      <Navbar></Navbar>
        <Routes>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about"  component={About}></Route>
        <Route exact path="/price" component={Pricing}></Route>
        <Route exact path="/testimony"  component={Testimonial}></Route>
        </Routes>
      </Router>
     

    </div> 
  );
}

export default App;
