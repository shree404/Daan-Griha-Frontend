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

function App() {
  return (
    
    <div>
     <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/signup" element={<SignUp/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/reset" element={<Forget_Password/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path ="/dashboard" element={<Dashboard/>}/>
    <Route path ="/donate" element={<Donate/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}
export default App;
