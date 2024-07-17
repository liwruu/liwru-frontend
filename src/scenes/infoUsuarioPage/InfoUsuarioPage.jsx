import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './InfoUsuarioPage.css';
import Navbar from '../../components/Navbar/Navbar';
import LoanListComponent from '../../components/loanlist-component/LoanListComponent.jsx';

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
                const { name, id } = jsonData;
                setUsuario({
                    nombreCompleto: name,
                    codigo: id,
                    tieneLibroPrestado: false
                });
            } catch (error) {
                console.log('An error occurred: ' + error);
            }
        }
    
        async function fetchUserLoans() {
            try {
                const response = await fetch(`/loans/${user.id}`, {
                    method: 'GET',
                    credentials: 'include'
                });
                const data = await response.json();
                setReservas(data);
                clasificarReservas(data);
            } catch (error) {
                console.error("Error al obtener datos del API", error);
            }
        }
    
        fetchUserSession();
        fetchUserLoans();
    }, []);
    
    const handleExtendReservation = async (id) => {
        try {
            const reserva = reservas.find(r => r.ID === id);
            if (!reserva) {
                console.error(`Reserva con ID: ${id} no encontrada`);
                return;
            }
    
            const response = await fetch(`extend/loans/${id}`, {
                method: 'PUT',
                credentials: 'include'
            });
            
            if (response.ok) {
                fetchUserLoans();
                console.log(`Reserva con ID: ${id} ha sido extendida`);
            } else {
                console.error(`Error al extender la reserva con ID: ${id}`);
            }
        } catch (error) {
            console.error(`Error al extender la reserva con ID: ${id}`, error);
        }
    };
    
    // async function clasificarReservas(reservas) {
    //     const fechaActual = new Date();
    //     const activas = [];
    //     const pasadas = [];
    
    //     reservas.forEach(reserva => {
    //         const returnDate = new Date(reserva.returnDate);
    //         const returnExtensionDate = reserva.returnExtensionDate ? new Date(reserva.returnExtensionDate) : null;
            
    //         if (returnDate >= fechaActual || (returnExtensionDate && returnExtensionDate >= fechaActual)) {
    //             activas.push(reserva);
    //         } else {
    //             pasadas.push(reserva);
    //         }
    //     });
    
    //     setReservasActivas(activas);
    //     setReservasPasadas(pasadas);
    // } 
  
    return (
        <div className="page-container">
            <Navbar/>
            <div className="info-container">
                <div className="info-form">
                    <h1>Bienvenido {usuario.nombreCompleto} :D </h1>
                    <p><strong>Código:</strong> {usuario.codigo}</p>
                    <p>{usuario.tieneLibroPrestado ? 'Tienes' : 'No tienes'} libros prestados D: </p>
                    <Link to="/configUser"> Configurar Usuario </Link>

                    <h2>Mis Prestamos Activos</h2>
                </div>
                <section className="reservas-activas">
                        <LoanListComponent/>
                </section>
            </div>
        </div>
    );
};

export default InfoUsuarioPage;
