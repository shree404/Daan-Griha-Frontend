import React from "react";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header-landing-page">
        <h1 id="head">Help make a difference in people's lives</h1>
      </header>
      <div className="features-container">
        <section className="features">
          <h2>We Provide</h2>
          <ul>
            <li>Efficient donation tracking</li>
            <li>User-friendly interface</li>
            <li>Secure payment processing</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
