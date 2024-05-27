import {Outlet} from 'react-router-dom';
import Footer from '../Footer/Footer';
import HeaderAdmin from '../HeaderAdmin/HeaderAdmin';
import './Layout.css';
import Navbar from '../Navbar/Navbar';

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