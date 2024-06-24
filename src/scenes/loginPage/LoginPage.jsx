import './LoginPage.css'
import background from '../../assets/images/background.jpg'
import logo from '../../assets/images/liwru-logo.png'
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import axiosInstance from '../../api/axios';

export default function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function handleLoginWithCookies() {
        const jsonData = {
            username: username,
            password: password
        };

        try {
            const response = await fetch('http://localhost:4000/auth/login', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(jsonData)
            });

            if (response.status === 200) navigate('/');
            else alert('Wrong username and/or password. Try again or click forgot your password? to reset it.')
        } catch (error) {
            console.log('An error occurred: ' + error);
        }
    }

    return (
        <main className='login-page'>
            <div className='login-page__left-panel'>
                <img className='login-page__left-panel__background' src={background} />
                <div className='login-page__left-panel__transparency' />
                <img className='login-page__left-panel__logo' src={logo} />
            </div>
            <div className='login-page__right-panel'>
                <input
                    className='login-page__right-panel__input'
                    placeholder='user id / email'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className='login-page__right-panel__input'
                    placeholder='password'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className='login-page__right-panel__error'>{error}</p>}
                <Link className='login-page__right-panel__forgot' to='/updatePwd'>forgot your password?</Link>
                <button className='login-page__right-panel__button' onClick={handleLoginWithCookies}>log in</button>
                <Link className='login-page__right-panel__register' to='/register'>Register now</Link>
            </div>
        </main>
    );
}
