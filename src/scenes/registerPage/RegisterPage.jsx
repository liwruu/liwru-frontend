import './RegisterPage.css'
import background from '../../assets/images/background.jpg'
import logo from '../../assets/images/liwru-logo.png'
import { Link, useNavigate } from 'react-router-dom';
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
                // Registro exitoso, redirigir al login
                navigate('/login');
            } else {
                // Manejo de errores
                const errorData = await response.json();
                console.error('Error:', errorData.message);
                alert('Error: ' + errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error: ' + error.message);
        }
    };

    return (
        <main className='register-page'>
            <div className='register-page__left-panel'>
                <img className='register-page__left-panel__background' src={background} />
                <div className='register-page__left-panel__transparency' />
                <img className='register-page__left-panel__logo' src={logo} />
            </div>
            <div className='register-page__right-panel'>
                <form onSubmit={handleSubmit}>
                    <input
                        className='register-page__right-panel__input'
                        name='username'
                        placeholder='username'
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <input
                        className='register-page__right-panel__input'
                        name='name'
                        placeholder='name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        className='register-page__right-panel__input'
                        name='lastname'
                        placeholder='lastname'
                        value={formData.lastname}
                        onChange={handleChange}
                    />
                    <input
                        className='register-page__right-panel__input'
                        name='email'
                        placeholder='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        className='register-page__right-panel__input'
                        name='password'
                        placeholder='password'
                        type='password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <span className='register-page__right-panel__label'>By signing up, you agree to our terms of service and privacy policy.</span>
                    <button className='register-page__right-panel__button' type='submit'>Sign up</button>
                </form>
                <Link className='register-page__right-panel__register' to='/login'>Log in instead</Link>
            </div>
        </main>
    );
}
