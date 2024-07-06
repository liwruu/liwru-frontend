import React, { useState, useEffect } from 'react';
import axios from "../../api/axios"
import './ReservedList.css';


export default function ReservedList() {
    const [searchId, setSearchId] = useState('');
    const [reservas, setReservas] = useState([]);
    const [reservasActivas, setReservasActivas] = useState([]);
    const [reservasPasadas, setReservasPasadas] = useState([]);

    useEffect(() => {
        fetchReservas();
    }, []);

    const fetchReservas = async () => {
        try {
            const response = await axios.get('/loans');
            const data = response.data;
            setReservas(data);
            clasificarReservas(data);
        } catch (error) {
            console.error("Error al obtener datos del API", error);
        }
    };

    const clasificarReservas = (reservas) => {
        const fechaActual = new Date();
        const activas = [];
        const pasadas = [];

        reservas.forEach(reserva => {
            const returnDate = new Date(reserva.returnDate);
            if (returnDate >= fechaActual) {
                activas.push(reserva);
            } else {
                pasadas.push(reserva);
            }
        });

        setReservasActivas(activas);
        setReservasPasadas(pasadas);
    };

    const handleSearch = () => {
        if (!searchId) {
            fetchReservas();
        } else {
            const reserva = reservas.find(r => r.ID === searchId);
            if (reserva) {
                const fechaActual = new Date();
                const returnDate = new Date(reserva.returnDate);
                if (returnDate >= fechaActual) {
                    setReservasActivas([reserva]);
                    setReservasPasadas([]);
                } else {
                    setReservasActivas([]);
                    setReservasPasadas([reserva]);
                }
            } else {
                setReservasActivas([]);
                setReservasPasadas([]);
            }
        }
    };

    const handleExtendReservation = async (id) => {
        try {
            // Encontrar la reserva a extender
            const reserva = reservas.find(r => r.ID === id);
            if (!reserva) {
                console.error(`Reserva con ID: ${id} no encontrada`);
                return;
            }

            // Realizar la petición para actualizar la reserva
            const response = await axios.put(`extend/loands/${id}`);
            if (response.status === 200) {
                // Actualizar la lista de reservas en el estado
                fetchReservas();
                console.log(`Reserva con ID: ${id} ha sido extendida`);
            } else {
                console.error(`Error al extender la reserva con ID: ${id}`);
            }
        } catch (error) {
            console.error(`Error al extender la reserva con ID: ${id}`, error);
        }
    };

    return (
        <div className="reservas-principal">
            <div className="busqueda-reservas">
                <input
                    type="text"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                    placeholder="Buscar por ID"
                />
                <button onClick={handleSearch}>Buscar</button>
            </div>
            <div className="reservas-activas">
                <h2>Reservas Activas</h2>
                {reservasActivas.length > 0 ? (
                    reservasActivas.map(reserva => (
                        <div key={reserva.ID}>
                            <p>ID: {reserva.ID}</p>
                            <p>Book ID:{reserva.bibliographicMaterialId}</p>
                            <p>User ID:{reserva.userID}</p>
                            <p>Loan Date: {reserva.loanDate}</p>
                            <p>Return Date: {reserva.returnDate}</p>
                            <p>Return Extension Date: {reserva.returnExtensionDate}</p>
                            <p>State: {reserva.state}</p>
                            <button onClick={() => handleExtendReservation(reserva.ID)}>
                                Extender Reserva
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No hay reservas activas.</p>
                )}
            </div>
            <div className="reservas-pasadas">
                <h2>Reservas Pasadas</h2>
                {reservasPasadas.length > 0 ? (
                    reservasPasadas.map(reserva => (
                        <div key={reserva.ID}>
                            <p>ID: {reserva.ID}</p>
                            <p>Book ID:{reserva.bibliographicMaterialId}</p>
                            <p>User ID:{reserva.userID}</p>
                            <p>Loan Date: {reserva.loanDate}</p>
                            <p>Return Date: {reserva.returnDate}</p>
                        </div>
                    ))
                ) : (
                    <p>No hay reservas pasadas.</p>
                )}
            </div>
        </div>
    );
}
