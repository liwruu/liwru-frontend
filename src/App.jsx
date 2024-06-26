import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './scenes/errorPage/ErrorPage';
import HomePage from './scenes/homePage/main/HomePage';
import Layout from './components/Layout/Layout';
import SearchPage from './scenes/searchPage/main/SearchPage';
import LoginPage from './scenes/loginPage/LoginPage';
import RegisterPage from './scenes/registerPage/RegisterPage';
import UpdatePwdPage from './scenes/updatePwdPage/UpdatePwdPage';
import AdminHomePage from './scenes/adminHomePage/AdminHomePage';
import CategoriesPage from './scenes/categoriesPage/CategoriesPage'; 
import ReservationMadePage from './scenes/reservationMadePage/ReservationMadePage';
import DescPage from './scenes/DescPage/DescPage';
import DetailPage from './scenes/detailsPage/DetailPage';
import UsersList from './scenes/usersList/UsersList';
import './App.css';

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
                path: '/categories', 
                element: <CategoriesPage />
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