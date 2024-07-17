import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import background from '../../assets/images/background.jpg';
import logo from '../../assets/images/liwru-logo.png';
import './UpdatePwdPage2.css';

const UpdatePwdPage2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || '';
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [randomCode, setRandomCode] = useState('');
  const [enteredCode, setEnteredCode] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/users?email=${email}`);
        const fetchedUser = response.data.find(user => user.email.toLowerCase() === email.toLowerCase());
        setUser(fetchedUser);
        setLoading(false);
      } catch (error) {
        setMessage('Error fetching user details');
        setLoading(false);
      }
    };

    generateRandomCode();
    fetchUser();
  }, [email]);

  const generateRandomCode = () => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setRandomCode(code);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (enteredCode === randomCode) {
      navigate('/updatePwd3', { state: { username: user.username } });
    } else {
      setMessage('The code you entered is incorrect.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className='update-pwd-page'>
      <div className='update-pwd-page__left-panel'>
        <img className='update-pwd-page__left-panel__background' src={background} alt="background" />
        <div className='update-pwd-page__left-panel__transparency' />
        <img className='update-pwd-page__left-panel__logo' src={logo} alt="logo" />
      </div>
      <div className='update-pwd-page__right-panel'>
        <div className='update-pwd-page__code'>
          <p>Your verification code is: <strong>{randomCode}</strong></p>
        </div>
        <form onSubmit={handleSubmit} className='update-pwd-page__form'>
          <input
            type="text"
            className='update-pwd-page__right-panel__input'
            placeholder='Enter code'
            value={enteredCode}
            onChange={(e) => setEnteredCode(e.target.value)}
            required
          />
          <span className='update-pwd-page__right-panel__label'>
            Please enter the code you have received.
          </span>
          <button type='submit' className='update-pwd-page__right-panel__button'>Validate code</button>
        </form>
        {message && <span className='update-pwd-page__right-panel__message2'>{message}</span>}
        <Link className='update-pwd-page__right-panel__register' to='/login'>Log in instead</Link>
      </div>
    </main>
  );
};

export default UpdatePwdPage2;
