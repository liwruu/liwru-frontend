import logoImage from '../../assets/images/liwru-logo.png';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__content'>
                <div className='footer__logo'>
                    <img src={logoImage} alt="Logo" className='footer__logo__icon' />
                </div>
                <div className='footer__links'>
                    <div className='footer__section'>
                        <h4 className='footer__section-title'>account</h4>
                        <Link className='footer__link' to='/account'>login</Link>
                        <Link className='footer__link' to='/signup'>sign up</Link>
                        <Link className='footer__link' to='/profile'>my profile</Link>
                    </div>
                    <div className='footer__section'>
                        <h4 className='footer__section-title'>books</h4>
                        <Link className='footer__link' to='/categories'>categories</Link>
                        <Link className='footer__link' to='/newest'>newest</Link>
                    </div>
                    <div className='footer__section'>
                        <h4 className='footer__section-title'>help</h4>
                        <Link className='footer__link' to='/about'>about us</Link>
                        <Link className='footer__link' to='/reservation-policy'>reservation policy</Link>
                        <Link className='footer__link' to='/privacy-terms'>privacy terms</Link>
                        <Link className='footer__link' to='/faq'>faq</Link>
                    </div>
                </div>
                <div className='footer__social-media'>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-icon">
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-app-round-white-icon.png" alt="Facebook" className="footer__social-icon__image" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-icon">
                        <img src="https://freelogopng.com/images/all_img/1683193139instagram-icon-png-white.png" alt="Instagram" className="footer__social-icon__image" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="footer__social-icon">
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-white-round-icon.png" alt="Twitter" className="footer__social-icon__image" />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="footer__social-icon">
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-white-icon.png" alt="YouTube" className="footer__social-icon__image" />
                    </a>
                </div>
            </div>
            <div className='footer__text'>
                © 2023-2024 Liwru. All rights reserved
            </div>
        </footer>
    );
}