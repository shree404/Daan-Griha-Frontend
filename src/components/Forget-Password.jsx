import React, { useState } from "react";
import "./Forget-Password.css";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

function Forget_Password() {
  const [formData, setFormData] = useState({
    phoneno: "",
    otp: "",
    newpassword: "",
    verifypassword: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const response = await fetch('http://localhost:8080/api/user/reset',{
        method:'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(formData),
      });
      console.log(response.json());
      // const data= await response.json();
    }
      
  
      catch(error){
        console.error('Error', error);
      }
    console.log("Form submitted:", formData);
  };
  return (
    <div>
 <Link to="/login">
    <button className="back-button">Back</button>
    </Link>

    <div className="Forget-Password-Container">
      <div className="" id="forget_title">
        <p id="forget_title_name">
        Reset Password</p>
      </div>
      <form
        action="submit"
        className="Form-Forget-Password"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="phoneno" className="reset-label">
            {" "}
            Contact No:
            <input
              type="tel"
              name="phoneno"
              id="phoneno"
              placeholder="Contact No"
              className="reset-input"
              value={formData.phoneno}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="otp" className="reset-label">
            {" "}
            Verification Code:
            <input
              type="tel"
              name="otp"
              id="otp"
              className="reset-input"
              placeholder="Verification Code"
              value={formData.otp}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="New-password" className="reset-label">
            {" "}
            New Password:
            <input
              type="password"
              name="newpassword"
              id="newpassword"
              className="reset-input"
              placeholder="New Password"
              formMethod="post"
              value={formData.newpassword}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="verifypassword" className="reset-label">
            {" "}
            Verify Password:
            <input
              type="password"
              name="verifypassword"
              id="verifypassword"
              className="reset-input"
              placeholder="Verify Password"
              value={formData.verifypassword}
              onChange={handleInputChange}
            />
          </label>
        </div>
      </form>
      <button className="reset-buton" onClick={handleSubmit}> Reset Password</button>
    </div>
    </div>
  );
}
export default Forget_Password;
