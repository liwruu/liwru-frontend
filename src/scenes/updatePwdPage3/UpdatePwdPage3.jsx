import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import background from '../../assets/images/background.jpg';
import logo from '../../assets/images/liwru-logo.png';
import './UpdatePwdPage3.css';

const UpdatePwdPage3 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username || '';
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    lastname: '',
    email: '',
    password: '',
    rol: '',
    state: '',
  });
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validationError, setValidationError] = useState('');

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
          password: '',
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

  const handleSaveChanges = async (event) => {
    event.preventDefault();
    if (formData.password.length < 8) {
      setValidationError('La contraseña debe tener al menos 8 caracteres');
      return;
    }
    if (formData.password !== repeatPassword) {
      setValidationError('Las contraseñas no coinciden');
      return;
    }
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
      navigate('/login');
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

  const handleRepeatPasswordChange = event => {
    setRepeatPassword(event.target.value);
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
    <main className='update-pwd-page'>
      <div className='update-pwd-page__left-panel'>
        <img className='update-pwd-page__left-panel__background' src={background} alt="background" />
        <div className='update-pwd-page__left-panel__transparency' />
        <img className='update-pwd-page__left-panel__logo' src={logo} alt="logo" />
      </div>
      <div className='update-pwd-page__right-panel'>
        <form onSubmit={handleSaveChanges} className='update-pwd-page__form'>
          <input
            type={showPassword ? 'text' : 'password'}
            className='update-pwd-page__right-panel__input'
            name='password'
            placeholder='Nueva contraseña'
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type={showPassword ? 'text' : 'password'}
            className='update-pwd-page__right-panel__input'
            placeholder='Repetir contraseña'
            value={repeatPassword}
            onChange={handleRepeatPasswordChange}
            required
          />
          <button
            type="button"
            className="toggle-password"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? 'Ocultar' : 'Mostrar'}
          </button>
          {validationError && <div className='update-pwd-page__right-panel__message'>{validationError}</div>}
          <button type='submit' className='update-pwd-page__right-panel__button'>Change password</button>
        </form>
        {error && <div className='update-pwd-page__right-panel__message'>{error}</div>}
        <Link className='update-pwd-page__right-panel__register' to='/login'>Log in instead</Link>
      </div>
    </main>
  );
};

export default UpdatePwdPage3;
