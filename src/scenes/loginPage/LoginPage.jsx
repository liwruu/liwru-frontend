import './LoginPage.css';
import logo from '../../assets/images/liwru-logo.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

export default function LoginPage({ onLogin }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function handleLoginWithCookies() {
        const jsonData = {
            username: username,
            password: password,
        };

        try {
            const response = await fetch('http://localhost:4000/auth/login', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData),
            });

            if (response.status === 200) {
                onLogin();
                navigate('/');
            } else {
                alert('Wrong username and/or password. Try again or click forgot your password? to reset it.');
            }
        } catch (error) {
            console.log('An error occurred: ' + error);
        }
    }

    const handleSignUp = () => {
        navigate('/register');
    };

    const handleUpdatePassword = () => {
        navigate('/updatePwd');
    };

    return (
        <main className='login-page'>
            <div className='login-card'>
                <div className='login-card__left-panel'>
                    <div className='login-card__left-panel__transparency' />
                    <img className='login-card__left-panel__logo' src={logo} alt='liwru logo'/>
                </div>
                <div className='login-card__right-panel'>
                    <button className='login-card__right-panel__signup-button' onClick={handleSignUp}>
                        sign up
                    </button>
                    <div className='login-card__right-panel__input-container'>
                        <FaUser className='login-card__right-panel__input-icon'/>
                        <input
                            className='login-card__right-panel__input'
                            placeholder='username'
                            onChange={(e) => setUsername(e.target.value)}
                            />
                    </div>
                    <div className='login-card__right-panel__input-container'>
                        <FaLock className='login-card__right-panel__input-icon' />
                        <input
                            className='login-card__right-panel__input'
                            placeholder='password'
                            type='password'
                            onChange={(e) => setPassword(e.target.value)}
                            />
                    </div>
                    {error && <p className='login-card__right-panel__error'>{error}</p>}
                    <button className='login-card__right-panel__forgot' onClick={handleUpdatePassword}>forgot your password?</button>
                    <button className='login-card__right-panel__button' onClick={handleLoginWithCookies}>log in</button>
                </div>
            </div>
            </main>
    );
}
