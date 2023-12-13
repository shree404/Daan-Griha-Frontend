import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Forget_Password from "./components/Forget-Password";

function App() {
  return (
    // <Router>
    //   <div>
    //     <Home />
    //     <Routes>
    //       <Route path="/signup" element={<SignUp />} />
    //     </Routes>
    //   </div>
    // </Router>
    <div>
     <Forget_Password/>
    </div>
  );
}
export default App;
