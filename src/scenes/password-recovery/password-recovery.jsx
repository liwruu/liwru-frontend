import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import background from '../../assets/images/background.jpg';
import logo from '../../assets/images/liwru-logo.png';
import './password-recovery.css';

const PasswordRecovery = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Email sent successfully. Check your inbox for further instructions.');
      } else {
        setMessage('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

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

export default PasswordRecovery;
