// import DashboardIcon from '../assets/icons/dashboard.svg';
import OrganizationIcon from '../assets/icons/organization.svg';
import UserlistIcon from '../assets/icons/user-list.svg';
// import UserIcon from '../assets/icons/user.svg';

// we can customize path and nav title from here like dashboard and its path whyen its click
const sidebar_adminmenu = [
    // {
    //     id: 1,
    //     icon: DashboardIcon,
    //     path: '/',
    //     title: 'Dashboard',
    // },
    {
        id: 2,
        icon: OrganizationIcon,
        path: '/organization',
        title: 'Organizations',
    },
    {
        id: 3,
        icon: UserlistIcon,
        path: '/',
        title: 'Users',
    },
    
    // {
    //     id: 4,
    //     icon: UserIcon,
    //     path: '/profile',
    //     title: 'My account',
    // }
]

export default sidebar_adminmenu;