import React, {useState, useEffect} from 'react';
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import DashboardHeader from '../../components/DashboardHeader';

import SideBar from '../../components/Sidebar/userSidebar';
import sidebar_menu from '../../constants/sidebar-menu';

import donate_button from "../../img/donate_button.png";
import feedback_button from "../../img/feedback_button.png";

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import '../styles.css';

function dashboard(){

    return(
        <div className='dashboard-content'>
            <SideBar menu={sidebar_menu} />
            <div className='userdash-area'>

            {/* <Button variant="contained" color="success">
                     Success
                </Button> */}
                <Link to="/donate">
                <img src={donate_button} alt="" className="donate_button" />
                 </Link> 

                
                <img src={feedback_button} alt="" className="feedback_button" />
                

            </div>
            
            
               


            
        </div>
    )

}
export default dashboard