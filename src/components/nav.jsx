import React, { useState } from "react";

import "./nav.css";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import SignUp from "./signup";

function Nav() {
  return (
    <div>
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
    </div>
  );
}

export default Nav;
