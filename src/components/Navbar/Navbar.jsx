import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import SearchBarIcon from '../../assets/icons/SearchBarIcon';
import logo_icon from '../../assets/images/ada.svg';
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
            <Link className='nav__logo' onClick={handleClear}>
                <img className='nav__logo__icon' src={logo_icon} alt="Logo" />
                <h1 className='nav__logo__title'>liwru</h1>
            </Link>
            <div className='nav__links'>
                <Link className='nav__link' to='/categories'>Categorías</Link>
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