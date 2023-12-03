import "./App.css";
import React from "react";
import Nav from "./components/nav";
import LandingPage from "./components/landingPage";
import Background from "./components/background";
import Donate from "./components/donate-button";

function App() {
  return (
    <div>
     <Nav/>
      <Donate />
     
      <div className="landingpage">
        <LandingPage />
      </div>
      <Background />
    </div>
  );
}
export default App;
