import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ReservationDetailsPage.css';

export default function ReservationDetailsPage() {
    const { username } = useParams();
    const [user, setUser] = useState(null);
    const [loans, setLoans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                setLoading(true);

                const userResponse = await axios.get(`/api/users/${username}`);
                if (!userResponse.data || typeof userResponse.data !== 'object') {
                    throw new Error('Respuesta de usuario no válida');
                }
                setUser(userResponse.data);

                const loansResponse = await axios.get(`/api/users/${username}/loans`);
                if (!Array.isArray(loansResponse.data)) {
                    throw new Error('Respuesta de préstamos no válida');
                }
                setLoans(loansResponse.data);

                setLoading(false);
            } catch (error) {
                setError('Error al cargar la información');
                console.error('Error al cargar la información:', error);
                setLoading(false);
            }
        };

        fetchUserData();
    }, [username]);

    if (loading) {
        return <div>Cargando información del usuario...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const loansList = [];
    for (let i = 0; i < loans.length; i++) {
        const loan = loans[i];
        loansList.push(
            <li key={loan.id}>
                <p><strong>ID de Préstamo:</strong> {loan.id}</p>
                <p><strong>Fecha de Reserva:</strong> {new Date(loan.loanDate).toLocaleDateString()}</p>
                <p><strong>Fecha de Devolución:</strong> {new Date(loan.returnDate).toLocaleDateString()}</p>
                <p><strong>¿Préstamo Extendido?:</strong> {loan.loanExtension ? 'Sí' : 'No'}</p>
                <hr />
            </li>
        );
    }

    return (
        <div className='reservation-details-page'>
            <div className='reservation-details-page__header'>
                <h1 className='reservation-details-page__header__title'>Detalles de la Reserva</h1>
                {user && <p><strong>Nombre del Usuario:</strong> {user.name} {user.lastname}</p>}
            </div>
            <div className='reservation-details-page__content'>
                <h2>Préstamos del Usuario</h2>
                {loans.length === 0 ? (
                    <p>No hay préstamos activos para mostrar.</p>
                ) : (
                    <ul>
                        {loansList}
                    </ul>
                )}
            </div>
        </div>
    );
}
