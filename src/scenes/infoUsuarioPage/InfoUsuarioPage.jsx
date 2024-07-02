import React, { useEffect, useState } from 'react';
import axios from "../../api/axios"
import { Link } from 'react-router-dom';
import detail from '../../assets/data/detail';
import Navbar from '../../components/Navbar/Navbar';  
import './InfoUsuarioPage.css';

const InfoUsuarioPage = () => {
    const [usuario, setUsuario] = useState({
        nombreCompleto: '',
        codigo: '',
        tieneLibroPrestado: false
    });
    const [reservas, setReservas] = useState([]);
    const [reservasActivas, setReservasActivas] = useState([]);
    const [reservasPasadas, setReservasPasadas] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        async function fetchUserSession() {
            try {
                const response = await fetch('http://localhost:4000/user', {
                    method: 'GET',
                    credentials: 'include'
                });
                const jsonData = await response.json();
                const {name, id} = jsonData;
                setUsuario({
                    nombreCompleto: name,
                    codigo: id,
                    tieneLibroPrestado: false
                });
            } catch (error) {
                console.log('An error occurred: ' + error);
            }
        };
        async function fetchUserLoans(){
            try {
                const response = await axios.get(`/loans/${usuario.id}`)
                const data = response.data;
                setReservas(data)
                clasificarReservas = (data)
            } catch (error) {
                console.error("Error al obtener datos del API", error);
            }
        };

        fetchUserSession();
        fetchUserLoans();
    }, []);

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
  
    return (
        <div className="page-container">
            <Navbar /> {}
            <div className="info-container">
                <div className="info-form">
                    <h1>Información del Usuario</h1>
                    <p><strong>Nombre completo:</strong> {usuario.nombreCompleto}</p>
                    <p><strong>Código:</strong> {usuario.codigo}</p>
                    <p><strong>Libro prestado:</strong> {usuario.tieneLibroPrestado ? 'Sí' : 'No'}</p>

                    <h2>Mis Prestamos Activos</h2>
                    <section className="reservas-activas">
                        {reservasActivas.length > 0 ? (
                        reservasActivas.map(reserva => (
                            <div key={reserva.ID}>
                                <p>ID: {reserva.ID}</p>
                                <p>Book ID:{reserva.bibliographicMaterialId}</p>
                                <p>User ID:{reserva.userID}</p>
                                <p>Loan Date: {reserva.loanDate}</p>
                                <p>Return Date: {reserva.returnDate}</p>
                                <button onClick={() => handleExtendReservation(reserva.ID)}>
                                    Extender Reserva
                                </button>
                            </div>
                        ))
                        ) : (
                            <p>No hay reservas activas.</p>
                        )}
                    </section>
                    <h2>Mis Prestamos Anteriores</h2>
                    <section className = "reservas-pasadas">
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
                    </section>
                </div>
            </div>
        </div>
    );
};

export default InfoUsuarioPage;
