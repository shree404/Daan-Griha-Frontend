import React from 'react';
import './donatefood.css';
import Nav from "./nav";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import donate_money from "../img/donate_money.jpg";

const DonateFood = () =>{
  return (
    <div>
  <Nav />
  <div className='donate-header'>
  <h2>Donate Money</h2>
  </div>
  <div className="" id="food">
    <div className="donate-food-container">
      
      <p className='food-donation-paragraph'>
      <div>
      For many poor individuals, financial struggles are a constant hurdle in their daily lives.
       From meeting basic needs like food, shelter, and healthcare to addressing unexpected emergencies,
        the lack of financial resources creates a perpetual cycle of hardship. The stress of not having enough
         money can impact mental well-being, limiting opportunities for education and personal development.
          For these individuals, the absence of a financial safety net makes navigating life's challenges a persistent
           and daunting task.
      </div>

     <div className='second-para'>
     Donations play a crucial role in alleviating the monetary burdens faced by the less fortunate.
      Whether through direct financial aid, access to education, or support for essential services,
       donations provide a lifeline for those in need. Charitable contributions empower individuals to break 
       free from the constraints of poverty, offering the chance to build a better future. By fostering economic 
       stability and creating opportunities for skill development, donations enable marginalized communities to
        break the cycle of poverty, fostering a sense of hope and resilience. Your contribution, no matter how small,
         has the power to make a lasting impact on someone's journey toward a more secure and dignified life.
     </div>

       
      </p>
      </div>
      <div className='food-donation-img'>
      <img src={donate_money} alt="" className="food-donation-image" />
      </div>
      <div id='second'>
      "Your generous financial contribution has the potential to create positive change in the lives of those
       facing economic hardships. In giving, you provide more than just financial assistance; you offer hope, 
       dignity, and a pathway to a brighter future. Every donation, no matter the size, contributes to building a
        more compassionate and equitable world. Thank you for being a force for good and making a meaningful difference 
        in the lives of others through your generosity."
        </div>

      </div>
    </div>
  );
};

export default DonateFood;
