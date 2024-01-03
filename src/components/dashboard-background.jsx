import React from "react";
import "./dashboard-background.css";
import background from "../img/background.jpg";

import User from "../img/user.png";
import Dash_logout from "../img/dash_logout.png";
import Dash_dashboard from "../img/dash_dashboard.png";
import Dash_donate from "../img/dash_donate.png";
import Dash_feedbback from "../img/dash_feedbback.png";
import Dash_profile from "../img/dash_profile.png";
import Dash_ngo from "../img/dash_ngo.png";


function dashboard_background() {
  return (
    <>
    <div className="dashboard_background_page">
      
      <div className="dashboard_background" id="">
      
      
      </div>

        <div className="profile_nav" id="" >

{/**area for the user profile and user name */}
          <div className="" id="">
              <img src={User} alt="user image" className="user_img" />
              <p className="user_name">Username: sushan gyawali</p>
           </div>
{/**area for dash navigation bar */}


           <div className="dashboard_nav" id="">
            
{/** this is for the area of logo and titles inside dashboard-nav area (1)*/}
            
            
             <div className="dash_nav_logo_name">

               <div className="nav_dash_titles_area" id="">
                 <p className="nav_dash_titles" > Dashboard</p>
                 </div>
                <div className="nav_logo_area" id="">
                      <img src={Dash_dashboard} alt="user image" className="nav_imgs" />
                </div>                                          
              
                 
              </div>

      
{/** this is for the area of logo and titles inside dashboard-nav area (2) */}
              <div className="dash_nav_logo_name">
                 <div className="nav_dash_titles_area" id="">
                 <p className="nav_dash_titles" > Donates</p>
                 </div>
                <div className="nav_logo_area" id="">
                      <img src={Dash_donate} alt="user image" className="nav_imgs" />
                </div>                                          
              
                 
              </div>
 {/** this is for the area of logo and titles inside dashboard-nav area (3) */}
              <div className="dash_nav_logo_name">
                <div className="nav_logo_area" id="">
                      <img src={Dash_ngo} alt="user image" className="nav_imgs" />
                </div>                                          
              
                 <div className="nav_dash_titles_area" id="">
                 <p className="nav_dash_titles" > INGO Lists</p>
                 </div>
              </div>
{/** this is for the area of logo and titles inside dashboard-nav area (4) */}
              <div className="dash_nav_logo_name">
                <div className="nav_logo_area" id="">
                      <img src={Dash_feedbback} alt="user image" className="nav_imgs" />
                </div>                                          
              
                 <div className="nav_dash_titles_area" id="">
                 <p className="nav_dash_titles" > Feedbacks</p>
                 </div>
              </div>
{/** this is for the area of logo and titles inside dashboard-nav area (5) */}
              <div className="dash_nav_logo_name">
                <div className="nav_logo_area" id="">
                      <img src={Dash_profile} alt="user image" className="nav_imgs" />
                </div>                                          
              
                 <div className="nav_dash_titles_area" id="">
                 <p className="nav_dash_titles" > Profile</p>
                 </div>
              </div>

{/** area for logout button */}

              


         </div>

         <div className="logout_area" id="">
              <div className="nav_logout_area" id="">
                      <img src={Dash_logout} alt="user image" className="logout_imgs" />
                </div>                                          
              
                 <div className="nav_dash_logout_area" id="">
                 <p className="nav_logout_titles" > Logout</p>
                 </div>

                 </div>
{/** */}


</div>

      
      
</div>
    
    </>
  );
}

export default dashboard_background;