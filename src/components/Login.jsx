import React, { useState } from "react";
import "./Login.css";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import Nav from "./nav";

function Login() {
  const [formData, setFormData] = useState({
    loginid: "",
    loginpassword: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <div>
<div className='' id='nav_area'>
<Nav />
</div>
   <div className="" id="login_page">
      {/* calling navigation bar  */}

<div className="bg" id="">

      <div className="login-container">

{/* div  for login_titles backgrounnd (green) and login text( login form)*/}
          <div className="" id="login_title">
               <p id="login_title_name" >Login Form</p>
           </div>



       <form action="submit" onSubmit={handleSubmit}>
          <div className="loginid">
            <label htmlFor="Username">
              {" "}
            Username:
            <input
              type="text"
              name="loginid"
              id="loginid"
              className="login-input"
              placeholder="Username"
              value={formData.loginid}
                onChange={handleInputChange}
            />
            </label>
          </div>

        <div className="loginpassword">
          <label htmlFor="loginpassword">
            {" "}
            Password:
            <input
              type="password"
              name="loginpassword"
              id="loginpassword"
              className="login-input"
              placeholder="Password"
              value={formData.loginpassword}
                onChange={handleInputChange}
              />
            </label>
          </div>

        <button className="login-button"> Login</button>
        <div className="forget-password">
          <p> <Link to="/reset">Forget password?</Link></p>
          </div>
      </form>
      <div className="newacc">
        <p className="donthaveacc">Don't have Account?</p>

        <Link to="/signup">
        <button className="signup-button-loginpage">Sign Up</button>
        </Link>

      </div>
    </div>
    {/* div end for bagground class*/}
    </div>


{/* div end for class login_page*/}
    </div>
    </div>

  );
}

export default Login;
