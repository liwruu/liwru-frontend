import {Link} from 'react-router-dom';
import './LinkButton.css';

export default function LinkButton({to, children, buttonClassName, handleClick}) {
    return (
        <Link
            className='link-button__link'
            to={to}
            onClick={handleClick}
        >
            <button
                className={`link-button__button ${buttonClassName}`}
                tabIndex='-1'
            >
                {children}
            </button>
        </Link>
    );
}