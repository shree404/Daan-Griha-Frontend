import React, { useState } from "react";
import "./Login.css";
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
    /*this div area includes whole login page with nav bar */ 
  <div className="" id="login_page">

  {/* calling navigation bar  */}
      <div className="" id="">
        <Nav />
      </div>

    <div className="bg" id="">

    

      <div className="login-container">

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
              placeholder="Username "
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
          <div className="forget-password">
          <p>Forget password ?</p>
        </div>
          
        </div>

        <button className="login-button"> Login</button>

      </form>

      <div className="newacc">
        <p className="donthaveacc">Don't have Account?</p>
        <button className="signup-button-loginpage">Sign Up</button>
      </div>

     </div>
    </div>



  </div>
  );
}

export default Login;
