// UserDetail.js

import React, { useState, useEffect } from 'react';

const UserDetail = ({ contact, onUserIconClick  }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const accessToken = localStorage.getItem("token");
        const response = await fetch('http://localhost:8080/api/profile',{
          headers:{
            Authorization: `Bearer ${accessToken}`,
          },
        }
        );
        // const data = await response.json();
        if (!response.ok) {
          throw new Error('Unable to fetch user information');
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  //       if (!response.ok) {
  //         setError(`Error: ${data.message}`);
  //       } else {
  //         setUser(data);
  //       }
  //     } catch (error) {
  //       setError("Error fetching user information");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchUser();
  // }, [contact]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div>
      <h2>User Information</h2>
      <p>Firstname: {user.firstname}</p>
      <p>Lastname: {user.lastname}</p>
      <p>Province: {user.province}</p>
      <p>District: {user.district}</p>
      <p>Municipality: {user.municipality}</p>
      <p>Contact: {user.contact}</p>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      {/* Add a button to call the onUserIconClick function */}
      <button onClick={onUserIconClick}>Click me</button>
    </div>
  );
};

export default UserDetail;
