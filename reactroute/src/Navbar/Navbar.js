import React from 'react'
// import { BrowserRouter as Router, Link } from "react-router-dom";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
           <Link to ="/">Home</Link>
          <Link to ="/about">about</Link>
          <Link to ="/testimony">Testimony</Link>
        </div>
    )
}

export default Navbar
