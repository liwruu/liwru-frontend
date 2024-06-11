import LinkButton from '../../components/LinkButton/LinkButton';
import LibrosIcon from '../../assets/images/libros.svg';
import Footer from '../../components/Footer/Footer';
import './ErrorPage.css';

export default function ErrorPage() {
    return (
        <>
            <div className='error-page'>
                <div className='error-page__content'>
                    <div className='error-page__error'>
                        <img src={LibrosIcon} alt="Error Icon" className='error-page__icon'/>
                        <div className='error-page__error__description'>
                            <h1 className='error-page__error__description__text'>oops!</h1>
                            <p className='error-page__message'>
                                buk not faund <i>[sic]</i><sup className='error-page__code'>404</sup>
                            </p>
                        </div>
                    </div>
                    <LinkButton
                        to='/homePage'
                        linkClassName='error-page__link-button__link'
                        buttonClassName='error-page__link-button__button'
                        >
                        Volver a la página principal
                    </LinkButton>
                </div>
            </div>
            <Footer />
        </>
    );
}
