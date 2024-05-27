import './LoginPage.css'
import background from '../../assets/images/background.jpg'
import logo from '../../assets/images/liwru-logo.png'

export default function LoginPage() {
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
                <span className='login-page__right-panel__forgot'>forgot your password?</span>
                <button className='login-page__right-panel__button'>log in</button>
                <span className='login-page__right-panel__register'>Register now</span>
            </div>
        </main>
    );
}