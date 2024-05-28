import LinkButton from '../../components/LinkButton/LinkButton';
import './ErrorPage.css';

export default function ErrorPage() {
    return (
        <div className='error-page'>
            <div className='error-page__error'>
                <h1 className='error-page__error__code'>404 </h1>
                <p className='error-page__error__description'>Not Found</p>
            </div>
            <p className='error-page__message'>¡Ups! Parece que algo salió mal. Estamos trabajando para solucionarlo.</p>
            <LinkButton
                to='/homePage'
                linkClassName='error-page__link-button__link'
                buttonClassName='error-page__link-button__button'
            >
                Volver a la página principal
            </LinkButton>
        </div>
    );
}