import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import CallPage from './scenes/callPage/CallPage';
import ErrorPage from './scenes/errorPage/ErrorPage';
import HomePage from './scenes/homePage/main/HomePage';
import Layout from './components/Layout/Layout';
import SearchPage from './scenes/searchPage/main/SearchPage';
import LoginPage from './scenes/loginPage/LoginPage';
import RegisterPage from './scenes/registerPage/RegisterPage';
import UpdatePwdPage from './scenes/updatePwdPage/UpdatePwdPage';
import AdminHomePage from './scenes/adminHomePage/AdminHomePage';
import './App.css';
import ConfigUser from './components/ConfigUser/ConfigUser';
import ReservationMadePage from './scenes/reservationMadePage/ReservationMadePage';
import DescPage from './scenes/DescPage/DescPage';

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
                path: '/callPage/:callId',
                element: <CallPage />
            },
            {
                path: '/reservationMadePage/',
                element: <ReservationMadePage />
            },
            {
                path: '/DescPage/',
                element: <DescPage />
            }
        ],
        errorElement: <ErrorPage />
    }
]);

export default function App() {
    return <RouterProvider router={router} />;
}