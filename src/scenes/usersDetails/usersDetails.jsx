import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { useParams, Link } from 'react-router-dom';
import './usersDetails.css';

const UserDetails = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    lastname: '',
    email: '',
    password: '',
    rol: '',
    state: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`/users/${username}`);
        setUser(response.data);
        setFormData({
          username: response.data.username,
          name: response.data.name,
          lastname: response.data.lastname,
          email: response.data.email,
          password: response.data.password,
          rol: response.data.rol,
          state: response.data.state,
        });
        setLoading(false);
      } catch (error) {
        setError('Error fetching user details');
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [username]);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setFormData({
      username: user.username,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
      rol: user.rol,
      state: user.state,
    });
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(`/users/${username}`, formData);
      setUser(prevUser => ({
        ...prevUser,
        username: formData.username,
        name: formData.name,
        lastname: formData.lastname,
        email: formData.email,
        password: formData.password,
        rol: formData.rol,
        state: formData.state,
      }));
      setEditMode(false);
    } catch (error) {
      setError('Error updating user details');
    }
  };

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <div>No se encontró el usuario</div>;
  }

  return (
    <div className="user-details">
      <h2>Detalles del Usuario: {user.username}</h2>
      {editMode ? (
        <div className="edit-form">
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="lastname">Apellido:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="password">Contraseña:</label>
          <div className="password-field">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? 'Ocultar' : 'Mostrar'}
            </button>
          </div>
          <label htmlFor="rol">Rol:</label>
          <select
            id="rol"
            name="rol"
            value={formData.rol}
            onChange={handleChange}
          >
            <option value="USER">Usuario</option>
            <option value="ADMIN">Administrador</option>
          </select>
          <label htmlFor="state">Estado:</label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
          >
            <option value="Active">Activo</option>
            <option value="Inactive">Inactivo</option>
          </select>
          <div className="edit-buttons">
            <button onClick={handleSaveChanges}>Guardar</button>
            <button onClick={handleCancelEdit}>Cancelar</button>
          </div>
        </div>
      ) : (
        <div className="user-info">
          <p>Nombre de usuario: {user.username}</p>
          <p>Nombre: {user.name}</p>
          <p>Apellido: {user.lastname}</p>
          <p>Email: {user.email}</p>
          <p>Rol: {user.rol}</p>
          <p>Estado: {user.state}</p>
          <button onClick={handleEditClick}>Editar</button>
        </div>
      )}
      <Link to="/usersList" className="back-link">
        Volver a la lista de usuarios
      </Link>
    </div>
  );
};

export default UserDetails;
