import DashboardIcon from '../assets/icons/dashboard.svg';
import OrganizationIcon from '../assets/icons/organization.svg';
import UserlistIcon from '../assets/icons/user-list.svg';
import UserIcon from '../assets/icons/user.svg';
import UserDetail from '../pages/Users/userdetails';

// we can customize path and nav title from here like dashboard and its path whyen its click
const sidebar_menu = [
    {
        id: 1,
        icon: DashboardIcon,
        path: '/',
        title: 'Dashboard',
    },
    {
        id: 2,
        icon: UserlistIcon,
        path: '/users',
        title: 'Users',
    },
    {
        id: 3,
        icon: OrganizationIcon,
        path: '/organization',
        title: 'Organizations',
    },
    {
        id: 4,
        icon: UserIcon,
        path: '/profile',
        title: 'My account',
        onclick : UserDetail,
       
    }
]

export default sidebar_menu;