import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './NotificationsPage.css';

const NotificationsPage = () => {
    const [notifications, setNotifications] = useState([]);
    const [usuario, setUsuario] = useState({ nombreCompleto: '', codigo: '' });
    const [librosPrestados, setLibrosPrestados] = useState([]);

    useEffect(() => {
        async function fetchUserSession() {
            try {
                const response = await fetch('http://localhost:4000/user', {
                    method: 'GET',
                    credentials: 'include'
                });
                const jsonData = await response.json();
                const { name, id } = jsonData;
                setUsuario({ nombreCompleto: name, codigo: id });
                fetchUserNotifications(id);
                fetchUserLoans(id);
            } catch (error) {
                console.error('Ocurrio un error obteniendo la sesion: ', error);
            }
        }

        async function fetchUserNotifications(userId) {
            try {
                const response = await fetch(`http://localhost:4000/notifications/${userId}`, {
                    method: 'GET',
                    credentials: 'include'
                });
                const jsonData = await response.json();
                setNotifications(jsonData.notifications);
            } catch (error) {
                console.error('Ocurrio un error obteniendo la sesion: ', error);
            }
        }

        async function fetchUserLoans(userId) {
            try {
                const response = await fetch(`http://localhost:4000/user/loans/${userId}`, {
                    method: 'GET',
                    credentials: 'include'
                });
                const jsonData = await response.json();
                setLibrosPrestados(jsonData);
            } catch (error) {
                console.error('An error occurred while fetching user loans: ', error);
            }
        }

        fetchUserSession();
    }, []);

    return (
        <div className="page-container">
            <Navbar />
            <div className="notifications-container">
                <div className="notifications-form">
                    <h1>Notifications</h1>
                    <ul className="notifications-list">
                        {notifications.map((notification, index) => (
                            <li key={index}>{notification}</li>
                        ))}
                    </ul>
                    <h2>Libros Prestados</h2>
                    <ul className="loans-list">
                        {librosPrestados.length > 0 ? (
                            librosPrestados.map((loan, index) => (
                                <li key={index}>
                                    {loan.bookTitle} - Devuelve antes del {new Date(loan.dueDate).toLocaleDateString()}
                                </li>
                            ))
                        ) : (
                            <li>No tienes libros prestados</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NotificationsPage;
