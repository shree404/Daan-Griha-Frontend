import React from "react";
import "./Home.css";
import Nav from "./nav";
import LandingPage from "./landingPage";
import Background from "./background";
import Donate from "./donate-button";

function Home() {
  return (
    <div>
      <Nav />
      <Donate />

      <div className="landingpage">
        <LandingPage />
      </div>
      <Background />
    </div>
  );
}

export default Home;
