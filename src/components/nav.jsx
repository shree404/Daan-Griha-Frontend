import React, { useState } from "react";

import "./nav.css";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navigation-area">
    
        <div className="Branding" id="logo-area">
          <p id="logo">Daan-<span id="logo-last">Griha</span></p>
        </div>
       
        <nav className="nav-bar">
       
        <Link to="/" >
          <div id="home">
            <p className="nav-buttons" to="/">Home</p>
          </div>
         </Link>

          {/* <p id="signup">
            <Link to="/signup">SignUp</Link>
          </p>
  */}
        <Link to="/about" >
          <div id="about">
            <p className="nav-buttons" to="/about" >About</p>
          </div> 
          </Link>

          <Link to="/contact" >
          <div id="contact">
            <p className="nav-buttons" to="/contact">Contact</p>
          </div>
          </Link>

          <Link to="/login">
          <div id="login">
            <p className="nav-buttons" to="/login">Login</p>
          </div>
          </Link>


        </nav>
        
        
        {/* <Routes>
          <Route path="/signup" element={<SignUp/>} />
          </Routes> */}

     
    </div>


  );
}

export default Nav;
