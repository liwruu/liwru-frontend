import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './scenes/errorPage/ErrorPage';
import HomePage from './scenes/homePage/main/HomePage';
import Layout from './components/Layout/Layout';
import SearchPage from './scenes/searchPage/main/SearchPage';
import LoginPage from './scenes/loginPage/LoginPage';
import RegisterPage from './scenes/registerPage/RegisterPage';
import UpdatePwdPage from './scenes/updatePwdPage/UpdatePwdPage';
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
import DescPage from './scenes/DescPage/DescPage';
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
        path: '/infoUsuario', // Nueva ruta para InfoUsuario
        element: <InfoUsuarioPage />,
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
