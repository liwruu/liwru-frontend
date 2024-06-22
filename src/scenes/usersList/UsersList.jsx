import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './UsersList.css';

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [userElements, setUserElements] = useState([]);

  useEffect(() => {
    axios.get('/users')
      .then(response => {
        setUsers(response.data);
        const elements = [];
        for (let i = 0; i < response.data.length; i++) {
          const user = response.data[i];
          const userStatus = user.state ? user.state.toLowerCase() : 'unknown';
          elements.push(
            <div className="user-item" key={i}>
              <Link to={`/users/${user.username}`} className="user-link">
                <h2 className="user-name">{user.username}</h2>
                <span className="user-fullname">{user.name} {user.lastname}</span>
                <span className="user-email">{user.email}</span>
                <span className={`user-status ${userStatus}`}>
                  {user.state || 'Unknown'} {/* Mostrar 'Unknown' si user.state es undefined */}
                </span>
              </Link>
            </div>
          );
        }
        setUserElements(elements);
      })
      .catch(error => {
        setError(error.message);
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="users-container">
      <h1>Usuarios Disponibles</h1>
      <section className="users-list">
        {userElements.length > 0 ? userElements : <div>No users found</div>}
      </section>
    </div>
  );
}
