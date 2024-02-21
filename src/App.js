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
import DonateFood from "./components/donatefood";
import DonateCloth from "./components/donatecloth";
import DonateMoney from "./components/donatemoney";
import Footer from "./components/footer";

import DashBoard from './pages/Dashboard/dashboard';
import Users from './pages/Users/users';
import Oragnization from './pages/Organizations/organization';

function App() {
  return (
   
    <div>
     <BrowserRouter>
     < Users/>
     {/* <Routes>
           <Route path="*" element={<DashBoard/>} />
          <Route exact path="/users" element={< Users/>} />
          <Route exact path="/organization" element={<Oragnization/>} />
          <Route exact path="/profile" element={<div></div>} />


      </Routes> */}
   {/* <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/signup" element={<SignUp/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/reset" element={<Forget_Password/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path ="/dashboard" element={<Dashboard/>}/>
    <Route path ="/donate" element={<Donate/>}/>
    <Route path="/about" element={<About/>} />
    <Route path="/donatefood" element={<DonateFood/>} />
    <Route path="/donatecloth" element={<DonateCloth/>} />
    <Route path="/donatemoney" element={<DonateMoney/>} />
    <Route path="/footer" element={<Footer/>} />
   </Routes> */}
   </BrowserRouter>
    </div>
  );
}
export default App;
