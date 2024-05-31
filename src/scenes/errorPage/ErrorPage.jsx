import LinkButton from '../../components/LinkButton/LinkButton';
import './ErrorPage.css';

export default function ErrorPage() {
    return (
        <div className='error-page'>
            <div className='error-page__content'>
                <div className='error-page__error'>
                    <h1 className='error-page__error__code'>oops!</h1>
                </div>
                <p className='error-page__message'>
                    buk not faund <i>[sic]</i><sup className='error-page__number'> 404</sup>
                </p>
                <LinkButton
                    to='/homePage'
                    linkClassName='error-page__link-button__link'
                    buttonClassName='error-page__link-button__button'
                >
                    Volver a la página principal
                </LinkButton>
            </div>
        </div>
    );
}
