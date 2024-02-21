import React, {useState, useEffect} from 'react';
import DashboardHeader from '../../components/DashboardHeader';

import SideBar from '../../components/Sidebar/userSidebar';
import sidebar_menu from '../../constants/sidebar-menu';

import '../styles.css';


function organization () {
    

    return(
        <div className='dashboard-content'>
            <SideBar menu={sidebar_menu} />
            
            
               


            
        </div>
    )
}

export default organization;