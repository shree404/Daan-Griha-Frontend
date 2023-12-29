import "./App.css";
import React from "react";
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import SignUp from "./components/signup";
import Login from "./components/Login";
import Forget_Password from "./components/Forget-Password";
import Contact from "./components/contact";
import Dashboard from "./components/dashboard";
import Donate from "./components/donate";
import About from "./components/about";
import Dashboard_Background from "./components/dashboard-background";

function App() {
  return (
   
    <div>
      <Donate/>
     {/** <Dashboard_Background/>
      <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/signup" element={<SignUp/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/reset" element={<Forget_Password/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path ="/dashboard" element={<Dashboard/>}/>
    <Route path ="/donate" element={<Donate/>}/>
    <Route path="/about" element={<About/>} />
   </Routes>
   </BrowserRouter>*/}
    </div>
  );
}
export default App;
