import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SearchBarIcon from '../../assets/icons/SearchBarIcon';
import logoImage from '../../assets/images/LiwruIcon.png';
import './Navbar.css';

export default function Navbar({ isLoggedIn, onLogout }) {
    const [search, setSearch] = useState('');
    const [isAccountDropdownVisible, setAccountDropdownVisible] = useState(false);
    const [isAdministrateDropdownVisible, setAdministrateDropdownVisible] = useState(false);
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

    function toggleAccountDropdown() {
        setAccountDropdownVisible(!isAccountDropdownVisible);
    }

    function toggleAdministrateDropdown() {
        setAdministrateDropdownVisible(!isAdministrateDropdownVisible);
    }

    function handleLogout() {
        onLogout();
        alert('Your session has been closed.');
    }

    return (
        <nav className='nav'>
            <Link className='nav__logo' onClick={handleClear} to='/'>
                <img className='nav__logo__icon' src={logoImage} alt="Logo" />
            </Link>
            <div className='nav__links'>
                <Link className={`nav__link ${location.pathname === '/' ? 'selected' : ''}`} to='/'>Home page</Link>
                <Link className={`nav__link ${location.pathname === '/categories' ? 'selected' : ''}`} to='/categories'>Categories</Link>
                {isLoggedIn ? (
                    <div className='nav__link nav__link--dropdown' onClick={toggleAdministrateDropdown}>
                        Administrate
                        {isAdministrateDropdownVisible && (
                            <div className='nav__dropdown-menu'>
                                <Link className='nav__dropdown-item' to='/test'>User List</Link>
                                <Link className='nav__dropdown-item' to='/administratoPage'>Information</Link>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link className={`nav__link ${location.pathname === '/administrate' ? 'selected' : ''}`} to='/'>Administrate</Link>
                )}
                <div className='nav__link nav__link--dropdown' onClick={toggleAccountDropdown}>
                    My account
                    {isAccountDropdownVisible && (
                        <div className='nav__dropdown-menu'>
                            {isLoggedIn ? (
                                <>
                                    <Link className='nav__dropdown-item' to='/descPage'>My reservation</Link>
                                    <Link className='nav__dropdown-item' to='/infoUsuario'>User Information</Link>
                                    <button className='nav__dropdown-item' onClick={handleLogout}>Logout</button>
                                </>
                            ) : (
                                <Link className='nav__dropdown-item' to='/login'>Login</Link>
                            )}
                        </div>
                    )}
                </div>
            </div>
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
        </nav>
    );
}