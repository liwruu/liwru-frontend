import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SearchBarIcon from '../../assets/icons/SearchBarIcon';
import logoImage from '../../assets/images/slider/image_4_logo.png';
import './Navbar.css';

export default function Navbar() {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    function handleChange(event) {
        setSearch(event.target.value);
    }

    function handleSubmit() {
        search && navigate(`/searchPage/${search}`);
    }

    function handleClear() {
        setSearch('');
    }

    return (
        <nav className='nav'>
            <Link className='nav__logo' onClick={handleClear} to='/'>
                <img className='nav__logo__icon' src={logoImage} alt="Logo" />
            </Link>
            <div className='nav__links'>
                <Link className={`nav__link ${location.pathname === '/' ? 'selected' : ''}`} to='/'>Home page</Link>
                <Link className={`nav__link ${location.pathname === '/categories' ? 'selected' : ''}`} to='/categories'>Categories</Link>
                <Link className={`nav__link ${location.pathname === '/services' ? 'selected' : ''}`} to='/services'>services</Link>
                <Link className={`nav__link ${location.pathname === '/events' ? 'selected' : ''}`} to='/events'>events</Link>
                <Link className={`nav__link ${location.pathname === '/reservationForm' ? 'selected' : ''}`} to='/reservationForm'>Reserve Books</Link>
                <Link className={`nav__link ${location.pathname === '/infoUsuario' ? 'selected' : ''}`} to='/infoUsuario'>My Account</Link>
                <Link className={`nav__link ${location.pathname === '/notifications' ? 'selected' : ''}`} to='/notifications'>Notificaciones</Link>
            </div>
            <div className='nav__search-bar-container'>
                <div className='nav__search-bar'>
                    <input
                        className='nav__search-bar__input'
                        value={search}
                        onChange={handleChange}
                        onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                        placeholder='search a book, ISBN, author'
                    />
                    <button className='nav__search-bar__button' onClick={handleSubmit}>
                        <SearchBarIcon className='nav__search-bar__button__icon' />
                    </button>
                </div>
                <Link className='nav__login-button' to='/login'>login</Link>
            </div>
        </nav>
    );
}
