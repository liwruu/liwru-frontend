import './UpdatePwdPage.css'
import background from '../../assets/images/background.jpg'
import logo from '../../assets/images/liwru-logo.png'

export default function UpdatePwdPage() {
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
                <button className='update-pwd-page__right-panel__button'>update password</button>
                <span className='update-pwd-page__right-panel__register'>Log in instead</span>
            </div>
        </main>
    );
}