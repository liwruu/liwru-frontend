import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import './UsersList.css';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOption, setFilterOption] = useState('all'); 
  const [orderBy, setOrderBy] = useState('asc'); 
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/users');
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching users');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const filterUsers = () => {
      let filteredList = users;

      if (filterOption === 'active') {
        filteredList = filteredList.filter(user => user.state !== 'inactive');
      } else if (filterOption === 'inactive') {
        filteredList = filteredList.filter(user => user.state === 'inactive');
      }

      filteredList = filteredList.filter(user =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (orderBy === 'asc') {
        filteredList = filteredList.sort((a, b) => a.username.localeCompare(b.username));
      } else if (orderBy === 'desc') {
        filteredList = filteredList.sort((a, b) => b.username.localeCompare(a.username));
      }

      setFilteredUsers(filteredList);
    };

    filterUsers();
  }, [users, searchTerm, filterOption, orderBy]);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = event => {
    setFilterOption(event.target.value);
  };

  const handleOrderByAsc = () => {
    setOrderBy('asc');
  };

  const handleOrderByDesc = () => {
    setOrderBy('desc');
  };

  const toggleUserSelection = username => {
    const isSelected = selectedUsers.includes(username);
    if (isSelected) {
      setSelectedUsers(prevSelected => prevSelected.filter(user => user !== username));
    } else {
      setSelectedUsers(prevSelected => [...prevSelected, username]);
    }
  };

  const handleBatchActivate = async () => {
    try {
      await axios.put('/users/activate', { usernames: selectedUsers });
      alert(`Usuarios activados: ${selectedUsers.join(', ')}`);
      const updatedUsers = users.map(user =>
        selectedUsers.includes(user.username) ? { ...user, state: 'Active' } : user
      );
      setUsers(updatedUsers);
      setSelectedUsers([]);
    } catch (error) {
      setError('Error al activar usuarios');
    }
  };

  const handleBatchDeactivate = async () => {
    try {
      await axios.put('/users/deactivate', { usernames: selectedUsers });
      alert(`Usuarios desactivados: ${selectedUsers.join(', ')}`);
      const updatedUsers = users.map(user =>
        selectedUsers.includes(user.username) ? { ...user, state: 'Inactive' } : user
      );
      setUsers(updatedUsers);
      setSelectedUsers([]);
    } catch (error) {
      setError('Error al desactivar usuarios');
    }
  };

  const handleExportCSV = () => {
    const csvData = filteredUsers.map(user => ({
      Username: user.username,
      Name: `${user.name} ${user.lastname}`,
      Email: user.email,
      Status: user.state || 'Unknown'
    }));

    return csvData;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="users-container">
      <h1>Usuarios Disponibles</h1>
      
      <div className="filters">
        <input
          type="text"
          placeholder="Buscar por nombre, apellido, correo electrónico o nombre de usuario"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={filterOption} onChange={handleFilterChange}>
          <option value="all">Todos</option>
          <option value="active">Activos</option>
          <option value="inactive">Inactivos</option>
        </select>
        <div className="order-buttons">
          <button onClick={handleOrderByAsc}>Ascendente</button>
          <button onClick={handleOrderByDesc}>Descendente</button>
        </div>
      </div>

      {selectedUsers.length > 0 && (
        <div className="batch-actions">
          <button onClick={handleBatchActivate}>Activar seleccionados</button>
          <button onClick={handleBatchDeactivate}>Desactivar seleccionados</button>
        </div>
      )}

      <section className="users-list">
        {filteredUsers.length > 0 ? (
          <>
            <div className="export-button">
              <CSVLink
                data={handleExportCSV()}
                filename={"usuarios.csv"}
                className="csv-link"
              >
                Exportar a CSV
              </CSVLink>
            </div>
            {filteredUsers.map((user, index) => (
              <div className="user-item" key={index}>
                <label className="user-select">
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.username)}
                    onChange={() => toggleUserSelection(user.username)}
                  />
                  <span>{user.username}</span>
                </label>
                <Link to={`/users/${user.username}`} className="user-link">
                  <span className="user-fullname">{user.name} {user.lastname}</span>
                  <span className="user-email">{user.email}</span>
                  <span className={`user-status ${user.state ? user.state.toLowerCase() : 'unknown'}`}>
                    {user.state || 'Unknown'}
                  </span>
                </Link>
              </div>
            ))}
          </>
        ) : (
          <div>No se encontraron usuarios</div>
        )}
      </section>
    </div>
  );
};

export default UsersList;
