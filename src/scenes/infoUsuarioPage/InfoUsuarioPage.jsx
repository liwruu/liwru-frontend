import React, { useEffect, useState } from 'react';
import axios from "../../api/axios"
import { Link, useNavigate, useLocation } from 'react-router-dom';
import detail from '../../assets/data/detail';
import './InfoUsuarioPage.css';
import Navbar from '../../components/Navbar/Navbar';

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
                fetchUserLoans();
                console.log(`Reserva con ID: ${id} ha sido extendida`);
            } else {
                console.error(`Error al extender la reserva con ID: ${id}`);
            }
        } catch (error) {
            console.error(`Error al extender la reserva con ID: ${id}`, error);
        }
    };

    async function clasificarReservas(reservas) {
        const fechaActual = new Date();
        const activas = [];
        const pasadas = [];

        reservas.forEach(reserva => {
            const returnDate = new Date(reserva.returnDate);
            if (returnDate >= fechaActual || returnExtensionDate>= fechaActual) {
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
                    <Link to="/configUser"> Configurar Usuario </Link>

                    <h2>Mis Prestamos Activos</h2>
                    <section className="reservas-activas">
                        {reservasActivas.length > 0 ? (
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Book ID</th>
                                        <th>User ID</th>
                                        <th>Fecha de Prestamo</th>
                                        <th>Fecha de Retorno</th>
                                        <th>Extension</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {reservasActivas.map(reserva => (
                                        <tr key={reserva.ID}>
                                            <td>{reserva.ID}</td>
                                            <td>{reserva.bibliographicMaterialId}</td>
                                            <td>{reserva.userID}</td>
                                            <td>{reserva.loanDate}</td>
                                            <td>{reserva.returnDate}</td>
                                            <td>
                                                {(() => {
                                                    if (reserva.returnExtensionDate == null ) {
                                                        if(reserva.loanExtension == true){
                                                            return (<p>No se puede extender la reserva</p>)
                                                        }else{
                                                            return (
                                                            <div id="reserva-link" onClick={() => handleExtendReservation(reserva.ID)}>
                                                            Extender Reserva
                                                            </div>
                                                            )
                                                        }
                                                    }else{
                                                        return (
                                                            <p>{reserva.returnExtensionDate}</p>
                                                        )
                                                    }
                                                     
                                                })()}
                                            </td>
                                            <td>{reserva.state}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>No hay reservas activas.</p>
                        )}
                    </section>
                    <h2>Reservas Pasadas</h2>
                    <section className="reservas-pasadas">
                        {reservasPasadas.length > 0 ? (
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Book ID</th>
                                        <th>User ID</th>
                                        <th>Loan Date</th>
                                        <th>Return Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {reservasPasadas.map(reserva => (
                                        <tr key={reserva.ID}>
                                            <td>{reserva.ID}</td>
                                            <td>{reserva.bibliographicMaterialId}</td>
                                            <td>{reserva.userID}</td>
                                            <td>{reserva.loanDate}</td>
                                            <td>{reserva.returnDate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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
