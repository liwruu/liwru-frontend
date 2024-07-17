import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { Link, useNavigate } from 'react-router-dom';
import background from '../../assets/images/background.jpg';
import logo from '../../assets/images/liwru-logo.png';
import './UpdatePwdPage.css';

const UpdatePwdPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userExists = users.some(user => user.email.toLowerCase() === email.toLowerCase());

    if (userExists) {
      navigate('/updatePwd2', { state: { email } });
    } else {
      setMessage('This email does not exist.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main className='update-pwd-page'>
      <div className='update-pwd-page__left-panel'>
        <img className='update-pwd-page__left-panel__background' src={background} alt="background" />
        <div className='update-pwd-page__left-panel__transparency' />
        <img className='update-pwd-page__left-panel__logo' src={logo} alt="logo" />
      </div>
      <div className='update-pwd-page__right-panel'>
        <form onSubmit={handleSubmit} className='update-pwd-page__form'>
          <input
            type="email"
            className='update-pwd-page__right-panel__input'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span className='update-pwd-page__right-panel__label'>
            Please enter your email address. You will receive a link to create a new password.
          </span>
          <button type='submit' className='update-pwd-page__right-panel__button'>Send code</button>
        </form>
        {message && <span className='update-pwd-page__right-panel__message2'>{message}</span>}
        <Link className='update-pwd-page__right-panel__register' to='/login'>Log in instead</Link>
      </div>
    </main>
  );
};

export default UpdatePwdPage;
