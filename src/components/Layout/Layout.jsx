import {Outlet} from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Layout.css';

export default function Layout() {
    return (
        <div className='layout'>
            <div className='layout__content'>
                <Navbar />
                <Outlet />
            </div>
            <Footer/>
        </div>
    );
}