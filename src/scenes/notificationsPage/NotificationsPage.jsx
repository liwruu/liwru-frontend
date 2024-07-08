import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './NotificationsPage.css';

const NotificationsPage = () => {
    const [notifications, setNotifications] = useState([]);
    const [newNotification, setNewNotification] = useState('');
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
                console.log('An error occurred: ' + error);
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
                console.log('An error occurred: ' + error);
            }
        }

        async function fetchUserLoans(userId) {
            try {
                const response = await fetch(`http://localhost:4000/loans/${userId}`, {
                    method: 'GET',
                    credentials: 'include'
                });
                const jsonData = await response.json();
                // Filtrar préstamos que están atrasados
                const overdueLoans = jsonData.loans.filter(loan => new Date(loan.dueDate) < new Date());
                setLibrosPrestados(overdueLoans);
            } catch (error) {
                console.log('An error occurred: ' + error);
            }
        }

        fetchUserSession();
    }, []);

    const handleAddNotification = async () => {
        try {
            const response = await fetch(`http://localhost:4000/notifications/${usuario.codigo}`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ notification: newNotification })
            });
            const jsonData = await response.json();
            setNotifications([...notifications, jsonData.notification]);
            setNewNotification('');
        } catch (error) {
            console.log('An error occurred: ' + error);
        }
    };

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
