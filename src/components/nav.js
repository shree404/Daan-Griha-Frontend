import React, { useState } from "react";
import "./nav.css";

function Nav() {
  return (
    <div>
      <nav className="nav-bar">
        <p
          id="signup"
        >
          Signup
        </p>
        <p
          id="login"
        >
          Login
        </p>
        <p
          id="home"
        >
          Home
        </p>
        <p
          id="about"
        >
          About
        </p>
        <p
          id="contact"
        >
          Contact
        </p>
      </nav>
    </div>
  );
}

export default Nav;
