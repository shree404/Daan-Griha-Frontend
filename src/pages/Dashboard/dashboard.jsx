import React, {useState, useEffect} from 'react';
import DashboardHeader from '../../components/DashboardHeader';

import SideBar from '../../components/Sidebar';
import sidebar_menu from '../../constants/sidebar-menu';

import '../styles.css';

function dashboard(){

    return(
        <div className='dashboard-content'>
            <SideBar menu={sidebar_menu} />
            
            <DashboardHeader
                btnText="Add Organization" />
               


            
        </div>
    )

}
export default dashboard