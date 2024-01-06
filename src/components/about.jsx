import React from 'react';
import "./about.css";
import myImage from '../img/about.jpg';
import Nav from "./nav";

const About = () => {
    const emailAddress = 'Daangriha@gmail.com';
    return (
        <div className="about-container">
            <Nav />
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
               
             </p>
             
             <div className="objectives-container">
             <h2>Our Objectives</h2>
             <ol className="objectives-list">
            <li>Facilitate transparent donation transactions.</li>
             <li>Ensure fair distribution of resources to beneficiaries.</li>
            <li>Promote community engagement and participation in donations.</li>
            <li>Establish a secure and efficient donation management system.</li>
            <li>Enhance awareness about the impact of donations on communities.</li>
             </ol>
            </div>

            <div className="scope-container">
             <h2>Scope</h2>
             <ol className="objectives-list">
            <li>Reduction of Food Waste: The primary scope of such a system is to reduce food waste by efficiently
             managing leftover food from various sources such as restaurants, events, and households.</li>

             <li>Resource Optimization: It can optimize the use of resources by diverting leftover food from 
             landfills and putting it to better use, like feeding the hungry or converting it into bio energy through
              composting.</li>

            <li>Environmental Benefits: Reducing  waste can have positive environmental impacts, such as decreasing
             methane emissions from decomposing food in landfills.</li>

            <li>Social Responsibility: It aligns with social responsibility by contributing to hunger alleviation and 
            poverty reduction.</li>

            <li>Cost Savings: For businesses, it can reduce costs associated with food disposal and disposal fees while
             potentially creating opportunities for tax incentives.</li>
             </ol>
            </div>
            



          <div>
            <p id="about-description"> If you have any questions or would like to learn more about how you can contribute feel free to contact at :
              <a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
          </div>

          <div className='fooder'>

</div>

        </div>)  
};

export default About;
