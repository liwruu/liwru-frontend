import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import CallPage from './scenes/callPage/CallPage';
import ErrorPage from './scenes/errorPage/ErrorPage';
import HomePage from './scenes/homePage/main/HomePage';
import Layout from './components/Layout/Layout';
import SearchPage from './scenes/searchPage/main/SearchPage';
import CategoriesPage from './scenes/categoriesPage/CategoriesPage';
import DetailPage from "./scenes/detailsPage/DetailPage";
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
                path: '/categories',
                element: <CategoriesPage />
            },
            {
                path: '/products/:productName',
                element: <DetailPage />
            }
            
        ],
        errorElement: <ErrorPage />
    }
]);

export default function App() {
    return <RouterProvider router={router} />;
}