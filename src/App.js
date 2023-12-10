import "./App.css";
import React from "react";
import Nav from "./components/nav";
import LandingPage from "./components/landingPage";
import Background from "./components/background";
import Donate from "./components/donate-button";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp";


function App() {
  return (
      <div>
        <Nav />
        <Router>
        <Routes>
          <Route path="/signup" element={<SignUp/>} />
          </Routes>
        </Router>
        <Donate />

        <div className="landingpage">
          <LandingPage />
        </div>
        <Background />
      </div>
  );
}
export default App;
