import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
        <h2>Login Form</h2>
      <form action="submit">
        <div className="loginid">
          <label htmlFor="Username" >
            {" "}
            Username:
            <input
              type="text"
              name="loginid"
              id="loginid"
              className="login-input"
              placeholder="Username"
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
            />
          </label>
        </div>
        <button className="login-button"> Login</button>
      </form>
    </div>
  );
}

export default Login;
