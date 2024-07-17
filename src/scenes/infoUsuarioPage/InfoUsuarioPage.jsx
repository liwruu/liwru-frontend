import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './InfoUsuarioPage.css';
import Navbar from '../../components/Navbar/Navbar';
import AdminComponent from '../../components/AdminComponent/admin-component.jsx';
import LoanListComponent from '../../components/loanlist-component/LoanListComponent.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const InfoUsuarioPage = () => {
    const [user, setUser] = useState({
        name: '',
        username: '',
        loanBook: false
    });
    const [loans, setLoans] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUserSession() {
            try {
                const response = await fetch('http://localhost:4000/user', {
                    method: 'GET',
                    credentials: 'include'
                });
                const jsonData = await response.json();
                const { name, username } = jsonData;
                setUser({
                    name: name,
                    username: username,
                    loanBook: false
                });
                await fetchUserLoans(username);
            } catch (error) {
                console.log('An error occurred: ' + error);
            }
        }

        async function fetchUserLoans(username) {
            try {
                const response = await fetch(`http://localhost:4000/users/${username}/loans`, {
                    method: 'GET',
                    credentials: 'include'
                });
                const data = await response.json();
                setLoans(data);
            } catch (error) {
                console.error("Error al obtener datos del API", error);
            } finally {
                setLoading(false);
            }
        }

        fetchUserSession();
        fetchUserLoans();
    }, []);

    const handleExtendReservation = async (id) => {
        try {
            const reserva = loans.find(r => r.id === id);
            if (!reserva) {
                console.error(`Reserva con ID: ${id} no encontrada`);
                return;
            }

            const response = await fetch(`http://localhost:4000/extend/loans/${id}`, {
                method: 'PUT',
                credentials: 'include'
            });

            if (response.ok) {
                await fetchUserLoans(user.id);
                console.log(`Reserva con ID: ${id} ha sido extendida`);
            } else {
                console.error(`Error al extender la reserva con ID: ${id}`);
            }
        } catch (error) {
            console.error(`Error al extender la reserva con ID: ${id}`, error);
        }
    };

    return (
        <div id='userlistcontaniner'>
            <Navbar />
            <div className="main-content">
                <div className='ul-admincomp'>
                <AdminComponent />
                </div>
                <div className='user-list'>
                    <div id='urh1'>
                        <h1>Welcome {user.name} :D </h1>
                    </div>
                    <div id='uls'>
                        <p>{user.loanBook ? 'You have loans :D' : 'You have not loans D:'} </p>
                        <Link />
                    </div>
                    <div id='ulsc'>
                        {loading ? (
                            <p>Cargando préstamos...</p>
                        ) : (
                            <LoanListComponent loans={loans} onAction={handleExtendReservation} />
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default InfoUsuarioPage;
