import React, { useState } from "react";
import "./Login.css";

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
    <div className="login-container">
      <h2>Login Form</h2>
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
      </form>
    </div>
  );
}

export default Login;
