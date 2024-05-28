import './RegisterPage.css'
import background from '../../assets/images/background.jpg'
import logo from '../../assets/images/liwru-logo.png'
import {Link, useNavigate} from 'react-router-dom';

export default function RegisterPage() {
    const navigate = useNavigate();
    return (
        <main className='register-page'>
            <div className='register-page__left-panel'>
                <img className='register-page__left-panel__background' src={background} />
                <div className='register-page__left-panel__transparency' />
                <img className='register-page__left-panel__logo' src={logo} />
            </div>
            <div className='register-page__right-panel'>
                <input
                    className='register-page__right-panel__input'
                    placeholder='your@example.com'
                />
                <input
                    className='register-page__right-panel__input'
                    placeholder='password'
                />
                <input
                    className='register-page__right-panel__input'
                    placeholder='given name'
                />
                <input
                    className='register-page__right-panel__input'
                    placeholder='family name'
                />
                <span className='register-page__right-panel__label'>By signing up, you agree to out terms of service and privacy policy.</span>
                <button className='register-page__right-panel__button' onClick={() => navigate('/login')}>sign up</button>
                <Link className='register-page__right-panel__register' to='/login'>Log in instead</Link>
            </div>
        </main>
    );
}