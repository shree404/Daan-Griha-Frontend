import React, { useState } from "react";
import "./nav.css";

function Nav() {
  const [ishovered, sethover] = useState(false);
  const mouseHandle = () => {
    sethover(true);
  };
  const mouseLeave = () => {
    sethover(false);
  };
  return (
    <div>
      <nav className="nav-bar">
        <p
          id="signup"
          // style={style}
          onMouseEnter={mouseHandle}
          onMouseLeave={mouseLeave}
        >
          Signup
        </p>
        <p
          id="login"
          // style={style}
          onMouseEnter={mouseHandle}
          onMouseLeave={mouseLeave}
        >
          Login
        </p>
        <p
          id="home"
          // style={style}
          onMouseEnter={mouseHandle}
          onMouseLeave={mouseLeave}
        >
          Home
        </p>
        <p
          id="about"
          // style={style}
          onMouseEnter={mouseHandle}
          onMouseLeave={mouseLeave}
        >
          About
        </p>
        <p
          id="contact"
          // style={style}
          onMouseEnter={mouseHandle}
          onMouseLeave={mouseLeave}
        >
          Contact
        </p>
      </nav>
    </div>
  );
}

export default Nav;
