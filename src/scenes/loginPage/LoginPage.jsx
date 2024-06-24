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

    const handleLogin = async () => {
        try {
            const response = await axiosInstance.post('auth/login', { username, password });
                navigate('/');
        } catch (error) {
            setError('Invalid username or password.');
        }
    };

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
                <button className='login-page__right-panel__button' onClick={handleLogin}>log in</button>
                <Link className='login-page__right-panel__register' to='/register'>Register now</Link>
            </div>
        </main>
    );
}
