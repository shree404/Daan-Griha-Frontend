import React from "react";
import "./landingPage.css";
import cover_for_home from "../img/cover_for_home.jpg";
import donate_foods from "../img/donate_foods.jpg";
import donate_clothes from "../img/donate_clothes.jpg";
import donate_money from "../img/donate_money.jpg";
import delivery from "../img/delivery.gif";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

const LandingPage = () => {
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

             <div className="grid1" id="donate_foods_area">

               <img src={donate_foods} alt="" className="donate_img1" />
               <p>Donate Food</p>

             </div>

             <div className="grid2" id="donate_clothes_area">

               <img src={donate_clothes} alt="" className="donate_img1" />
               <p>Donate Clothes</p>

             </div>

             <div className="grid3" id="donate_money_area">

               <img src={donate_money} alt="" className="donate_img1" />
               <p>Donate Money</p>

             </div>


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



    </div>
  );
};

export default LandingPage;
