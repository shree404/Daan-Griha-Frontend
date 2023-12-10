import React, { useState } from "react";

import "./nav.css";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import SignUp from "./SignUp";

function Nav() {
  return (
    <div>
      <Router>
        <nav className="nav-bar">
          <p id="signup">
            <Link to="/signup">SignUp</Link>
          </p>
          <p id="login">
            <Link to="/login">Login</Link>
          </p>
          <p id="home">
            <Link to="/">Home</Link>
          </p>
          <p id="about">
            <Link to="/about">About</Link>
          </p>
          <p id="contact">
            <Link to="/contact">Contact</Link>
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
