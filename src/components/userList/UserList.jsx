import React, { useState } from 'react';
import './userlist.css';

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'ander', name: 'Ander Achata', email: 'ander@gmail.com', role: 'ADMIN' },
    { id: 2, username: 'wifituga', name: 'Manuel Zambrano', email: 'wifi@gmail.com', role: 'ADMIN' },
    { id: 3, username: 'antrozi', name: 'Antony Sanchez', email: 'uwu@gmail.com', role: 'ADMIN' },
    { id: 4, username: 'kamiones', name: 'Carlos Quiñones', email: 'kamion@gmail.com', role: 'ADMIN' },
    { id: 5, username: 'Locrito', name: 'David Sen', email: 'david@gmail.com', role: 'USER' },
    { id: 6, username: 'guati', name: 'Steve Clark', email: 'guati@gmail.com', role: 'USER' },
    { id: 7, username: 'prueba1', name: 'Pepe Martin', email: 'prueba@gmail.com', role: 'USER' },
    { id: 8, username: 'prueba2', name: 'Laura Martin', email: 'prueba2@gmail.com', role: 'USER' },
    { id: 9, username: 'prueba3', name: 'Miguel Martin', email: 'prueba3@gmail.com', role: 'USER' },
  ]);
  
  const [message, setMessage] = useState('');

  const handleRemoveUser = (username) => {
    const user = users.find(user => user.username === username);
    if (user.role !== 'ADMIN') {
      setUsers(users.filter(user => user.username !== username));
      setMessage('User has been removed successfully.');
      setTimeout(() => setMessage(''), 3000); // Clear message after 3 seconds
    } else {
      alert('Cannot remove admin user');
    }
  };

  return (
    <div>
      <h1 className="center-text">User List</h1>
      {message && <div className="message">{message}</div>}
      <div className="user-table">
        <div className="table-header">
          <div><p>ID</p></div>
          <div><p>Username</p></div>
          <div><p>Email</p></div>
          <div><p>Role</p></div>
          <div><p>Actions</p></div>
        </div>
        {users.length > 0 ? (
          users.map(user => (
            <div key={user.username} className="table-row">
              <div><p>{user.id}</p></div>
              <div><p>{user.username}</p></div>
              <div><p>{user.email}</p></div>
              <div><p>{user.role}</p></div>
              <div><button onClick={() => handleRemoveUser(user.username)}>Remove</button></div>
            </div>
          ))
        ) : (
          <div className="table-row">
            <p colSpan="5">No users found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;
