import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ErrorPage from './scenes/errorPage/ErrorPage';
import HomePage from './scenes/homePage/main/HomePage';
import SearchPage from './components/SearchPage/main/SearchPage';
import LoginPage from './scenes/loginPage/LoginPage';
import RegisterPage from './scenes/registerPage/RegisterPage';
import ReservedList from './components/ReservedList/ReservedList';
import ConfigUser from './components/ConfigUser/ConfigUser';
import DescPage from './scenes/DescPage/DescPage';
import UserList from './components/userList/UserList'; 
import UserDetails from './scenes/usersDetails/usersDetails';
import AdminHomePage from './scenes/adminHomePage/AdminHomePage';
import CategoriesPage from './scenes/categoriesPage/CategoriesPage';
import ReservationMadePage from './scenes/reservationMadePage/ReservationMadePage';
import DetailPage from './scenes/detailsPage/DetailPage';
import InfoUsuarioPage from './scenes/infoUsuarioPage/InfoUsuarioPage'; 
import Footer from './components/Footer/Footer';
import ReservationFormPage from './scenes/reservationFormPage/ReservationFormPage';
import Navbar from './components/Navbar/Navbar'; 
import './App.css';
import PasswordRecovery from './scenes/password-recovery/password-recovery';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleLogin() {
        setIsLoggedIn(true);
    }

    function handleLogout() {
        setIsLoggedIn(false);
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <>
                    <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
                    <Outlet />
                    <Footer />
                </>
            ),
            errorElement: <ErrorPage />,
            children: [
                {
                    path: '/',
                    element: <HomePage />,
                },
                {
                    path: '/searchPage/:searchQuery',
                    element: <SearchPage />,
                },
                {
                    path: '/reservationMadePage/',
                    element: <ReservationMadePage />,
                },
                {
                    path: '/DescPage/',
                    element: <DescPage />,
                },
                {
<<<<<<< HEAD
                    path: '/userlist',
                    element: <UserList />,
                },
                {
=======
>>>>>>> 0d9237ba6b3fed79a2d1136a938087dbddd8de88
                    path: '/categories',
                    element: <CategoriesPage />,
                },
                {
                    path: '/ReservationForm',
                    element: <ReservationFormPage />,
                },
                {
                    path: '/details/:detailId',
                    element: <DetailPage />,
                },
            ],
        },
        {
            path: '/login',
            element: <LoginPage onLogin={handleLogin} />,
        },
        {
            path: '/register',
            element: <RegisterPage />,
        },
        {
            path: '/reservedListAdmin',
            element: <ReservedList />,
        },
        {
            path: '/configUser',
            element: <ConfigUser />,
        },
        {
            path: '/descPage',
            element: <DescPage />,
        },
        {
            path: '/reservationMadePage',
            element: <ReservationMadePage />,
        },
        {
            path: '/usersList',
            element: <UserList />, // Corrected import path
        },
        {
            path: '/users/:username',
            element: <UserDetails />,
        },
        {
            path: '/infoUsuario',
            element: <InfoUsuarioPage />,
        },
        {
            path: '/administratoPage',
            element: <AdminHomePage />,
        },
        {
            path: '/password/recovery',
            element: <PasswordRecovery />
        }
    ]);

    return <RouterProvider router={router} />;
}

export default App;
