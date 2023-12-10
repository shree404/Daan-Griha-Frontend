import React from "react";
import "./SignUp.css";

function SingUp() {
  return (
    <div>
      <form>
        <label htmlFor="First Name"></label>
        <input type="text" name="firstname" id="firstname" placeholder="First Name" />
       <label htmlFor="Last Name"></label>
        <input type="text" name="firstname" id="lastname" placeholder="Last Name" />
        <label htmlFor="Contact"></label>
        <input type="number" name="contact" id="contact" placeholder="Contact No" />
        <label htmlFor="Email"></label>
        <input type="email" name="email" id="email" placeholder="Your Email" />
      </form>
    </div>
  );
}

export default SingUp;
