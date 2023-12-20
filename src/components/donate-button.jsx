import React from "react";
import "./donate-button.css";
import { Link } from "react-router-dom";

function Donate() {
  return (
    <section className="call-to-action">
      <button className="donate-button"><Link to ="/donate" >Donate</Link></button>
    </section>
  );
}

export default Donate;
