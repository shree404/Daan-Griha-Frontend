import React from "react";
import "./landingPage.css";
import cover_for_home from "../img/cover_for_home.jpg";
import donate_foods from "../img/donate_foods.jpg";
import donate_clothes from "../img/donate_clothes.jpg";
import donate_money from "../img/donate_money.jpg";
import delivery from "../img/delivery.gif";
import donate_cloth from "../img/donate_clothes.jpg";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import Footer from "./footer";

import  { useState, useEffect } from 'react';
import rawfoodImage from '../img/raw-food.png';
import packedfoodImage from '../img/packed-food.png';

const LandingPage = () => {

  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === 1 ? 2 : 1));
    }, 3500); // Adjust the interval (in milliseconds) for auto-swapping

    return () => clearInterval(intervalId); // Clear the interval on component unmount
  }, []);
 

  return (

     
    <div className="landing-page">

      <div className="home_cover_area">
         <img src={cover_for_home} alt="" className="home_cover" />

          
            
{/*
          <header className="header1">
            <h1 id="head1">Our Works</h1>
             <p>"Look what we can do together."</p>
          </header>*/ }
          

       </div>

{/* area of green background just below the cover pages*/ }
       <div className="title_for_cover" id="">
       <Link to="/login">
              <button className="Donate-button-home">Donate</button>
       </Link>
           </div>
 {/* area for our works sections*/ } 
       <div className="header1">
            <h1 id="head1">Our Works</h1>
             <p>"Look what we can do together."</p>
        </div>



        
       <div className="photogrid" id="">

            <Link to="/DonateFood">
             <div className="grid1" id="donate_foods_area">

               <img src={donate_foods} alt="" className="donate_img1" />
               <p>Donate Food</p>

             </div>
             </Link>

             <Link to="/DonateCloth">
             <div className="grid2" id="donate_clothes_area">

               <img src={donate_clothes} alt="" className="donate_img1" />
               <p>Donate Clothes</p>

             </div>
            </Link>

            <Link to="/DonateMoney">
             <div className="grid3" id="donate_money_area">

               <img src={donate_money} alt="" className="donate_img1" />
               <p>Donate Money</p>

             </div>
           </Link>

         </div>


         <div className="header1">
            <h1 id="head1">DOOR PICKUP</h1>
             <p>"Your donate will be immediately collected and sent to needy people "</p>
        </div>
        <div className="" id="delivery_gif_area">
          <img src={delivery} alt="" id="elivery_gif"/>

        </div>







       {/* area of green background just below the cover pages
       <div className="title_for_cover" id="">

       </div>

       
       


      <header className="header">
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

*/ }

{/*donate food section*/}

<div className="donatefood-section">
<div className='donatefood-header'>
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


      <div className="image-container">
      <img
        src={currentImage === 1 ? rawfoodImage : packedfoodImage}
        alt={currentImage === 1 ? 'Raw Food' : 'Packed Food'}
        className={`image ${currentImage === 1 ? 'visible' : ''}`}
      />
      <img
        src={currentImage === 2 ? rawfoodImage : packedfoodImage}
        alt={currentImage === 2 ? 'Raw Food' : 'Packed Food'}
        className={`image ${currentImage === 2 ? 'visible' : ''}`}
      />
    </div>
    </div>

{/*donate cloth section*/}

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
      

      </div>


<div>
        <Footer/>
      </div>

    </div>
  );
};

export default LandingPage;
