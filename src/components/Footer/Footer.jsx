import SAPIcon from '../../assets/icons/SAPIcon';
import UlimaIcon from '../../assets/icons/UlimaIcon';
import './Footer.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <UlimaIcon className='footer__ulima-logo' />
            <SAPIcon className='footer__sap-logo' />
        </footer>
    );
}