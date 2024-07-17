import './RegisterPage.css';
import logo from '../../assets/images/liwru-logo.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function RegisterPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        lastname: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                navigate('/login');
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData.message);
                alert('Error: ' + errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error: ' + error.message);
        }
    };

    const handleLogIn = () => {
        navigate('/login');
    };

    return (
        <main className='register-page'>
            <div className='register-card'>
                <div className='register-card__left-panel'>
                    <div className='register-card__left-panel__transparency' />
                    <img className='register-card__left-panel__logo' src={logo} alt="logo" />
                </div>
                <div className='register-card__right-panel'>
                    <button className='login-card__right-panel__signup-button' onClick={handleLogIn}>
                        log in
                    </button>
                    <form id='register' onSubmit={handleSubmit}>
                        <div className='register-card__input-container'>
                            <input
                                className='register-card__right-panel__input'
                                name='username'
                                placeholder='username'
                                value={formData.username}
                                onChange={handleChange}
                                required
                                />
                        </div>
                        <div className='register-card__input-container'>
                            <input
                                className='register-card__right-panel__input'
                                name='name'
                                placeholder='name'
                                value={formData.name}
                                onChange={handleChange}
                                required
                                />
                        </div>
                        <div className='register-card__input-container'>
                            <input
                                className='register-card__right-panel__input'
                                name='lastname'
                                placeholder='lastname'
                                value={formData.lastname}
                                onChange={handleChange}
                                required
                                />
                        </div>
                        <div className='register-card__input-container'>
                            <input
                                className='register-card__right-panel__input'
                                name='email'
                                placeholder='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                                />
                        </div>
                        <div className='register-card__input-container'>
                            <input
                                className='register-card__right-panel__input'
                                name='password'
                                placeholder='password'
                                type='password'
                                value={formData.password}
                                onChange={handleChange}
                                required
                                />
                        </div>
                        <span className='register-card__right-panel__label'>
                            By signing up, you agree to our terms of service and privacy policy.
                        </span>
                        <button className='register-card__right-panel__button' type='submit'>Sign up</button>
                    </form>
                </div>
            </div>
        </main>
    );
}
