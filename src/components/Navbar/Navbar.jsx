import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBarIcon from '../../assets/icons/SearchBarIcon';
import logoImage from '../../assets/images/slider/image_4_logo.png';
import './Navbar.css';

export default function Navbar() {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    function handleChange(event) {
        setSearch(event.target.value);
    }

    function handleSumbit() {
        search && navigate(`/searchPage/${search}`);
    }

    function handleClear() {
        setSearch('');
    }

    return (
        <nav className='nav'>
<<<<<<< HEAD
            <Link className='nav__logo' to='/homePage' onClick={handleClear}>
                <img className='nav__logo__icon' src={logo_icon} />
                <h1 className='nav__logo__title'>liwru</h1>
=======
            <Link className='nav__logo' onClick={handleClear} to='/'>
                <img className='nav__logo__icon' src={logoImage} alt="Logo" style={{ width: '250px', height: 'auto', marginTop: '20px'}}/>
>>>>>>> feature/categories
            </Link>
            <div className='nav__links'>
                <Link className='nav__link' to='/'>Inicio</Link>
                <Link className='nav__link' to='/categories'>Categorías</Link>
                <Link className='nav__link' to='/myaccount'>Mi Cuenta</Link>
                <Link className='nav__link' to='/help'>Ayuda</Link>
            </div>
            <div className='nav__search-bar'>
                <input
                    className='nav__search-bar__input'
                    value={search}
                    onChange={handleChange}
                    onKeyDown={(e) => e.key === 'Enter' && handleSumbit()}
                    placeholder='Buscar'
                />
                <button className='nav__search-bar__button' onClick={handleSumbit}>
                    <SearchBarIcon className='nav__search-bar__button__icon' />
                </button>
            </div>
        </nav>
    );
}