import React from "react";
import "./Home.css";
import Nav from "./nav";
import LandingPage from "./landingpage";
import Donate from "./donate-button";

function Home() {
  return (
    <div>
      <Nav />
     {/**  <Donate /> */}

      <div className="landingpage">
        <LandingPage />
      </div>
      
    </div>
  );
}

export default Home;
