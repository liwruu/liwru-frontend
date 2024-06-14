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
                <Link className={`nav__link ${location.pathname === '/' ? 'selected' : ''}`} to='/'>home page</Link>
                <Link className={`nav__link ${location.pathname === '/categories' ? 'selected' : ''}`} to='/categories'>categories</Link>
                <Link className={`nav__link ${location.pathname === '/services' ? 'selected' : ''}`} to='/services'>services</Link>
                <Link className={`nav__link ${location.pathname === '/events' ? 'selected' : ''}`} to='/events'>events</Link>
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