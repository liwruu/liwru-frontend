import './UpdatePwdPage.css'
import background from '../../assets/images/background.jpg'
import logo from '../../assets/images/liwru-logo.png'
import {Link, useNavigate} from 'react-router-dom';

export default function UpdatePwdPage() {
    const navigate = useNavigate();
    return (
        <main className='update-pwd-page'>
            <div className='update-pwd-page__left-panel'>
                <img className='update-pwd-page__left-panel__background' src={background} />
                <div className='update-pwd-page__left-panel__transparency' />
                <img className='update-pwd-page__left-panel__logo' src={logo} />
            </div>
            <div className='update-pwd-page__right-panel'>
                <input
                    className='update-pwd-page__right-panel__input'
                    placeholder='old password'
                />
                <input
                    className='update-pwd-page__right-panel__input'
                    placeholder='new password'
                />
                <input
                    className='update-pwd-page__right-panel__input'
                    placeholder='repeat password'
                />
                <span className='update-pwd-page__right-panel__label'>Your password should contain at least one capital letter and one number.</span>
                <button className='update-pwd-page__right-panel__button' onClick={() => navigate('/')}>update password</button>
                <Link className='update-pwd-page__right-panel__register' to='/'>Log in instead</Link>
            </div>
        </main>
    );
}