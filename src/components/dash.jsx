import React from "react";
import "./dash.css";
import User from "../img/user.png";
import Dash_logout from "../img/dash_logout.png";
import Dash_dashboard from "../img/dash_dashboard.png";
import Dash_donate from "../img/dash_donate.png";
import Dash_feedbback from "../img/dash_feedbback.png";
import Dash_profile from "../img/dash_profile.png";
import Dash_ngo from "../img/dash_ngo.png";
import { Link } from "react-router-dom";


function Dash() {
  return (
    <div className="dash-back" id="">

        <div className="dash-navigation-area">
    
              <div className="Branding" id="logo-area">
                 <p id="logo">Daan-<span id="logo-last">Griha</span></p>
              </div>

              <div className="profile_area" id="">
                <div className="user_img_area" id="">
                  <img src={User} alt="user image" className="dash_user_img" />
                </div>
                <div className="dash_user_name_area" id="">
                 <p className="dash_user_name">sushan gyawali</p>
                </div>
              </div>
 
         </div>
         <br></br>

        <div className="logined-title" id="">
            <p id="logined-title-name"> Welcome to Daan-Griha</p>

        </div>

        {/* actual navigation area after login */}

        <div className="dash-nav-block-area" id="">


        {/* <div className="dash-nav-area" id="">
          <div className="dash-nav-block" id="">

          </div>

          <div className="dash-nav-block" id="">

          </div>
          

          
          <div className="dash-nav-block" id="">

          </div>


          </div> */}

          <nav className="dash-nav-area">

            <ul>

              <li>
                  <div className="dash-nav-block" id="">
                    <div className="dash-nav-logo" id="">
                    <img src={Dash_profile} alt="user image" className="dash-nav-imgs" />

                    </div>
                    
                    <div className="dash-nav-logo-title-area" id="">
                     <p className="dash-nav-logo-title" > Profile</p>
                    </div>

                   </div>

              </li>

              <li>
                <div className="dash-nav-block" id="">
                   <div className="dash-nav-logo" id="">
                      <img src={Dash_donate} alt="user image" className="dash-nav-imgs" />
                    </div>
                    
                    <div className="dash-nav-logo-title-area" id="">
                       <p className="dash-nav-logo-title" > Donate</p>
                    </div>

                 </div>
              </li>

              <li>
                  <div className="dash-nav-block" id="">
                      <div className="dash-nav-logo" id="">
                       <img src={Dash_ngo } alt="user image" className="dash-nav-imgs" />
                      </div>
                    
                      <div className="dash-nav-logo-title-area" id="">
                         <p className="dash-nav-logo-title" > INGO's</p>
                       </div>

                  </div>
              </li>

              <li>
                  <div className="dash-nav-block" id="">
                     <div className="dash-nav-logo" id="">
                       <img src={Dash_dashboard} alt="user image" className="dash-nav-imgs" />
                     </div>
                    
                      <div className="dash-nav-logo-title-area" id="">
                        <p className="dash-nav-logo-title" > Donation history</p>
                     </div>

                  </div>
              </li>

              <li>
                  <div className="dash-nav-block" id="">
                     <div className="dash-nav-logo" id="">
                       <img src={Dash_feedbback} alt="user image" className="dash-nav-imgs" />
                      </div>
                    
                      <div className="dash-nav-logo-title-area" id="">
                        <p className="dash-nav-logo-title" > Feedbacks</p>
                      </div>

                  </div>
              </li>
              
            </ul>
          </nav>
          

          
          
          



          



        </div>





    </div>
  );
}

export default Dash;