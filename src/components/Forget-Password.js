import React, { useState } from "react";
import "./Forget-Password.css";
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <div className="Forget-Password-Container">
      
      <div className="" id="forget_title">
        <p id="forget_title_name">Reset Password</p>
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
      <button className="reset-button"> Reset Password</button>
    </div>
  );
}
export default Forget_Password;
