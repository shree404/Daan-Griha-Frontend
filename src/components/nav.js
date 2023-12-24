import React, { useState } from "react";

import "./nav.css";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import SignUp from "./SignUp";

function Nav() {
  return (
    <div className="navigation-area">
      <Router>
        <div className="Branding" id="logo-area">
          <p id="logo">Daan-<span id="logo-last">Griha</span></p>
        </div>
       
        <nav className="nav-bar">
       
          <p id="home">
            <Link className="nav-buttons" to="/">Home</Link>
          </p>

          {/* <p id="signup">
            <Link to="/signup">SignUp</Link>
          </p>
  */}
          
          <p id="about">
           
            <Link className="nav-buttons" to="/about" >About</Link>
          </p> 
          <p id="contact">
            <Link className="nav-buttons" to="/contact">Contact</Link>
          </p>
          <p id="login">
            <Link className="nav-buttons" to="/login">Login</Link>
          </p>

        </nav>
        
        
        {/* <Routes>
          <Route path="/signup" element={<SignUp/>} />
          </Routes> */}

      </Router>
    </div>
  );
}

export default Nav;
