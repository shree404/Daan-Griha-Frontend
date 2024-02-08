import React from 'react';
import './footer.css'; // Import your CSS file
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
          <div className="footer-section">
            <h3>Links</h3>
            <ul>
              <li>
              <Link to="/" >
          <div>
            <p >Home</p>
          </div>
         </Link>
         </li>

              <li>
              <Link to="/about" >
          <div >
            <p  >About</p>
          </div> 
          </Link>
              </li>
             
              <li>
              <Link to="/signup" >
          <div >
            <p  >SignUp</p>
          </div> 
          </Link>
              </li>

            </ul>
          </div>
          

          
<div className="footer-section">
            <h2>Contact</h2>
            <p>Email: Daangriha@gmail.com</p>
            <p>Phone: 07122487</p>
          </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()} Copyright Your Website
        </div> 
           </div>
  );
};

export default Footer;