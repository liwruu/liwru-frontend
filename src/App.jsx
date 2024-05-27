import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CallPage from './scenes/callPage/CallPage';
import ErrorPage from './scenes/errorPage/ErrorPage';
import HomePage from './scenes/homePage/main/HomePage';
import Layout from './components/Layout/Layout';
import SearchPage from './scenes/searchPage/main/SearchPage';
import ReservationMadePage from './scenes/reservationMadePage/ReservationMadePage'; // Corregido el nombre de la carpeta en la ruta de importación

import './App.css';

const router = createBrowserRouter([
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
            }
        ],
        errorElement: <ErrorPage />
    }
]);

export default function App() {
    return <RouterProvider router={router} />;
}