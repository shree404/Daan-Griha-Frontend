import React from "react";
import background from "../img/background.jpg";
import background from "./background.css";

function Background() {
  return (
    <div className="container">
      <img src={background} alt="Background image" className="background-img" />
    </div>
  );
}

export default Background;
