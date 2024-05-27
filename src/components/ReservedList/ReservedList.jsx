import React, { useState } from 'react';
import './ReservedList.css'

export default function ReservedList() {
    const [searchId, setSearchId] = useState('');
    const [reservas, setReservas] = useState([]);
    const [reservasActivas, setReservasActivas] = useState([]);
    const [reservasPasadas, setReservasPasadas] = useState([]);

    //const api_url = "";

    const fetchReservas = async () => {
        try {
            const response = await fetch(api_url);
            if (!response.ok) {
                throw new Error(`Error al obtener datos del API: ${response.statusText}`);
            }
            const data = await response.json();
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
                            <p>Loan Date: {reserva.loanDate}</p>
                            <p>Return Date: {reserva.returnDate}</p>
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