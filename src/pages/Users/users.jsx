// Users.js
import { calculateRange, sliceData } from '../../utils/table-pagination';
import all_users from '../../constants/user_list';
import React, { useState, useEffect } from 'react';
import UserDetail from "./userdetails.js" // Import the UserDetail component
import DashboardHeader from '../../components/DashboardHeader';
import SideBar from '../../components/Sidebar/userSidebar';
import sidebar_menu from '../../constants/sidebar-menu';
// ... (other imports)

function Users() {
  const [search, setSearch] = useState('');
  const [userList, setUsers] = useState(all_users);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);

  // State to manage selected user contact for detailed view
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    setPagination(calculateRange(all_users, 5));
    setUsers(sliceData(all_users, page, 5));
  }, []);

  // ... (other functions)

  // Function to handle row click and set the selected contact
  const handleRowClick = (contact) => {
    setSelectedContact(contact);
  };

  return (

    <div className='dashboard-content'>
            <SideBar menu={sidebar_menu} />

      <div className='dashboard-content-container'>
        {/* ... (existing code) */}

        <table>
          {/* ... (existing code) */}
          <tbody>
            {userList.map((order, index) => (
              <tr key={index} onClick={() => handleRowClick(order.contact)}>
                {/* ... (existing code) */}
              </tr>
            ))}
          </tbody>
        </table>

        {/* ... (existing code) */}

        {/* Display the UserDetail component with the selectedContact */}
        {selectedContact && <UserDetail contact={selectedContact} />}
      </div>
    </div>
  );
}

export default Users;
