import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import SearchBarIcon from '../../assets/icons/SearchBarIcon';
import logo_icon from '../../assets/images/ada.svg';
import './HeaderAdmin.css';

export default function HeaderAdmin() {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    function handleChange(event) {
        setSearch(event.target.value);
    }
    function handleHome(){
        navigate('/');
    }
    function handleCategories(){
        navigate('/categories')
    }
    function handleServices(){
        navigate('/services')
    }
    function handleEvents(){
        navigate('/events')
    }
    function handleSumbit() {
        search && navigate(`/searchPage/${search}`);
    }

    function handleClear() {
        setSearch('');
    }
    function handleAccoount(){
        navigate('/account')
    }

    return (
        <header className='headeradmin'>
            <Link className='nav__logo' onClick={handleClear}>
                <img className='nav__logo__icon' src={logo_icon} />
                <h1 className='nav__logo__title'>liwru</h1>
            </Link>
            <div className = 'nav_buttons'>
                <button
                 className='homebutton'
                 onClick={handleHome}
                 >
                    Home
                 </button>
                 <button
                 className='categoriesbutton'
                 onClick={handleCategories}
                 >
                    Categories
                 </button>
                 <button
                 className='servicesbutton'
                 onClick={handleServices}
                 >
                    Services
                 </button>
                 <button
                 className='eventsbutton'
                 onClick={handleEvents}
                 >
                    Events 
                 </button>
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
            <div className ='AccountButton'>
                <button className='myAccountButton' onClick={handleAccount}>
                    My Account
                </button>
            </div>
        </header>
    );
}