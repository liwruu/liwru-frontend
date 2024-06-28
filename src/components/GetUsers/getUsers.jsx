import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';

const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/users');
        setUsers(response.data);
      } catch (error) {
        setError('Error fetching users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="users-container">
      <h1>Usuarios Disponibles</h1>
      <section className="users-list">
        {users.length > 0 ? (
          users.map((user, index) => (
            <div className="user-item" key={index}>
              <Link to={`/users/${user.username}`} className="user-link">
                <h2 className="user-name">{user.username}</h2>
                <span className="user-fullname">{user.name} {user.lastname}</span>
                <span className="user-email">{user.email}</span>
                <span className={`user-status ${user.state ? user.state.toLowerCase() : 'unknown'}`}>
                  {user.state || 'Unknown'}
                </span>
              </Link>
            </div>
          ))
        ) : (
          <div>No se encontraron usuarios</div>
        )}
      </section>
    </div>
  );
};

export default GetUsers;
