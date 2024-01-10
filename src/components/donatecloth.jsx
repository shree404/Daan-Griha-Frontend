import React from 'react';
import './donatefood.css';
import Nav from "./nav";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import donate_cloth from "../img/donate_clothes.jpg";

const DonateCloth = () =>{
  return (
    <div>
  <Nav />
  <div className='donate-header'>
  <h2>Donate Clothes</h2>
  </div>
  <div className="" id="food">
    <div className="donate-food-container">
      
      <p className='food-donation-paragraph'>
      <div>
      Clothing waste is a significant environmental challenge with widespread social and ecological consequences.
       The fashion industry's rapid cycles of production and consumption contribute to the accumulation of textile 
       waste in landfills, where these items often do not decompose easily. The environmental impact is substantial,
        as the production of clothing involves considerable water usage, energy consumption, and the release of 
        pollutants. Moreover, the sheer volume of discarded garments contributes to the depletion of natural 
        resources and exacerbates environmental degradation.
      </div>

     <div className='second-para'>
      Donating clothes allows for the reuse and repurposing of garments,
       extending their lifecycle and diverting them from landfills. This process helps support communities in need
        by providing affordable clothing options. Additionally, various organizations and initiatives promote 
        responsible consumption by encouraging conscious shopping habits and advocating for sustainable practices
         within the fashion industry. By emphasizing the importance of reducing, reusing, and recycling clothing, 
         individuals and communities can contribute to a more sustainable and ethical approach to fashion, mitigating
          the negative impacts of clothing waste on both the environment and society.
     </div>

       
      </p>
      </div>
      <div className='food-donation-img'>
      <img src={donate_cloth} alt="" className="food-donation-image" />
      </div>
      <div id='second'>
      "Your small act of clothes donation can make a significant impact in someone's life. 
      It's a gesture of kindness that not only provides warmth and comfort but also contributes to a more 
      sustainable and compassionate world. Each piece you donate has the power to bring joy and hope to someone in need. 
      Thank you for being a part of positive change through the simple act of giving."
        </div>

      </div>
    </div>
  );
};

export default DonateCloth;
