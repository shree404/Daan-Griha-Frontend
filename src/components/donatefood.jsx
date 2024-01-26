import React from 'react';
import './donatefood.css';
import Nav from "./nav";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import donate_foods from "../img/donate_foods.jpg";
import  { useState, useEffect } from 'react';
import rawfoodImage from '../img/raw-food.png';
import packedfoodImage from '../img/packed-food.png';
import Footer from "./footer";

const DonateFood = () =>{

  

  return (
    <div>

  <Nav />
 

  <div className='donate-header'>
  <h2>Donate Food</h2>
  </div>
  <div className="" id="food">
    <div className="donate-food-container">
      
      <p className='food-donation-paragraph'>
      <div>
      Food wastage is a pressing global issue with significant repercussions
      for both society and the environment. Roughly one-third of the world's food production,
        amounting to about 1.3 billion metric tons annually, is lost or wasted. 
        This wastefulness occurs at various stages, from farm to fork, and is influenced by factors such as 
        inefficient production, inadequate storage, and consumer behavior. The social impact is profound,
         as the resources invested in producing wasted food could instead be directed toward addressing global hunger.
          Furthermore, food wastage contributes to environmental degradation, generating methane emissions in 
          landfills and squandering valuable resources like water and energy.
      </div>

     <div className='second-para'>
     Recognizing the importance of curbing food wastage extends beyond merely conserving resources.
      It involves fostering sustainable practices that address hunger, reduce environmental impact, and 
      promote responsible consumer behavior. As individuals, businesses, and governments work collaboratively
       to minimize food wastage, we move towards a more equitable and environmentally conscious food system. 
       It requires a holistic approach that considers the entire food supply chain, from production and distribution
        to consumption, in order to build a more sustainable and resilient future for our planet.
     </div>

       
      </p>
      </div>
      <div className='food-donation-img'>
      <img src={donate_foods} alt="" className="food-donation-image" />
      </div>

      

      </div>


      
    <div id='second'>
        Help make a difference in someone's life by donating food. Your contribution can provide
        nourishment and support to those in need. Together, we can make a positive impact on
        communities and ensure that no one goes hungry.
        </div>

        <div>
        <Footer/>
      </div>


    </div>
  );
};

export default DonateFood;
