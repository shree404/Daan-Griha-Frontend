import React, {useState, useEffect} from 'react';
import DashboardHeader from '../../components/DashboardHeader';

import SideBarAdmin from '../../components/Sidebar/adminSidebar';
import sidebar_adminmenu from '../../constants/sidebar-adminmenu';


import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import '../styles.css';

function dashboard(){

    return(
        <div className='dashboard-content'>
            <SideBarAdmin menu={sidebar_adminmenu} />
            <div className='test'>
                
            <Stack direction="row" spacing={2}>
            <Button variant="contained">ADD Organizations</Button>
               
            </Stack>
            </div>

            
        </div>
    )

}
export default dashboard