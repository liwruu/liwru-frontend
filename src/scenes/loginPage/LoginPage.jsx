import './LoginPage.css'
import background from '../../assets/images/background.jpg'
import logo from '../../assets/images/liwru-logo.png'
import {Link, useNavigate} from 'react-router-dom';

export default function LoginPage() {
    const navigate = useNavigate();
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
                />
                <input
                    className='login-page__right-panel__input'
                    placeholder='password'
                />
                <Link className='login-page__right-panel__forgot' to='/updatePwd'>forgot your password?</Link>
                <button className='login-page__right-panel__button' onClick={() => navigate('/homePage')}>log in</button>
                <Link className='login-page__right-panel__register' to='/register'>Register now</Link>
            </div>
        </main>
    );
}