import React from 'react';
import "./about.css";
import myImage from '../img/about.jpg';

const About = () => {
    const emailAddress = 'Daangriha@gmail.com';
    return (
      
        <div className="about-container">

            <h1 className="about-title">About Us</h1>
            <img
        src={myImage}
        alt="About"
        className="about-image"
      />

            <p className="about-description">Welcome to our organization! At Daan-Griha, we are driven by a passionate commitment to solve food and waste management. 
            Our dedicated team works tirelessly to improve human behaviour throwing foods and goods. However, we cannot achieve our mission alone. Your support through
             donations plays a crucial role in making a positive impact in the lives of those who are unable to get their basic need.
              By contributing to Daan griha, you become an integral part of our community striving for needy people who really need your help. Every donation, regardless of size, 
              helps us to make more stronger and build up our community hope for further growth.
              Together, we can create a better future. Join us in our mission to controll the wastage and make a difference in the world. Your generosity is greatly appreciated.
               If you have any questions or would like to learn more about how you can contribute feel free to contact at : <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
             </p>
      
        </div>
       
    );
};

export default About;
