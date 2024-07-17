import LinkButton from '../../components/LinkButton/LinkButton';
import './ErrorPage.css';
import ErrorImage from '../../assets/images/oops!-text.png';

export default function ErrorPage() {
    return (
        <>
            <div className='error-page'>
                <div className='error-page__content'>
                    <div className='error-page__error'>
                        <img src={ErrorImage} alt="Error Icon" className='error-page__icon'/>
                        <div className='error-page__error__description'>
                        </div>
                    </div>
                    <LinkButton
                        to='/'
                        linkClassName='error-page__link-button__link'
                        buttonClassName='error-page__link-button__button'
                        >
                        Volver a la página principal
                    </LinkButton>
                </div>
            </div>
        </>
    );
}
