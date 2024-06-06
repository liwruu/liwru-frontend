import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username} - {user.name} {user.lastname} - {user.email} - {user.rol} - {user.state} </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
