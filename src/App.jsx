import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './scenes/errorPage/ErrorPage';
import HomePage from './scenes/homePage/main/HomePage';
import Layout from './components/Layout/Layout';
import SearchPage from './components/SearchPage/main/SearchPage';
import LoginPage from './scenes/loginPage/LoginPage';
import RegisterPage from './scenes/registerPage/RegisterPage';
import UpdatePwdPage from './scenes/updatePwdPage/UpdatePwdPage';
import UpdatePwdPage2 from './scenes/updatePwdPage2/UpdatePwdPage2';
import UpdatePwdPage3 from './scenes/updatePwdPage3/UpdatePwdPage3';
import ReservedList from './components/ReservedList/ReservedList';
import ConfigUser from './components/ConfigUser/ConfigUser';
//import AdminHomePage from './scenes/adminHomePage/AdminHomePage';
import './App.css';
//import ConfigUser from './components/ConfigUser/ConfigUser';
import DescPage from './scenes/DescPage/DescPage';
import UsersList from './scenes/usersList/UsersList';
import UserDetails from './scenes/usersDetails/usersDetails';
import Test from './scenes/test';
import AdminHomePage from './scenes/adminHomePage/AdminHomePage';
import CategoriesPage from './scenes/categoriesPage/CategoriesPage';
import ReservationMadePage from './scenes/reservationMadePage/ReservationMadePage';
import DetailPage from './scenes/detailsPage/DetailPage';
import InfoUsuarioPage from './scenes/infoUsuarioPage/InfoUsuarioPage'; 
import ReservationFormPage from './scenes/reservationFormPage/ReservationFormPage';


const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },
    {
        path: '/updatePwd',
        element: <UpdatePwdPage />,
    },
    {
        path: '/updatePwd2',
        element: <UpdatePwdPage2 />,
    },
    {
        path: '/updatePwd3',
        element: <UpdatePwdPage3 />,
    },
    {
        path: '/reservedListAdmin',
        element:<ReservedList />
    },
    {
        path:'/configUser',
        element:<ConfigUser />
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
        element: <UsersList />,
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
        element:<AdminHomePage />
    },
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/searchPage/:searchQuery',
                element: <SearchPage />
            },
            {
                path: '/reservationMadePage/',
                element: <ReservationMadePage />
            },
            {
                path: '/DescPage/',
                element: <DescPage />
            },
            {
                path: '/Test/',
                element: <Test />
            },
            {
                path: '/categories',
                element: <CategoriesPage />
            },
            {
                path: '/ReservationForm',
                element: <ReservationFormPage />
            },
            {
                path: '/details/:detailId',
                element: <DetailPage />
            }
        ],
        errorElement: <ErrorPage />
    }
]);

export default function App() {
    return <RouterProvider router={router} />;
}
