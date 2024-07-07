import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import './ConfigUser.css/';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const ConfigUser = () => {
    const { username } = useParams();
    const [user, setUser] = useState({
        name: '',
        lastname: '',
        email: ''
    });
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchUserSession() {
            try {
                const response = await fetch('http://localhost:4000/user', {
                    method: 'GET',
                    credentials: 'include'
                });
                const jsonData = await response.json();
                const {name, lastname, email} = jsonData;
                setUser({
                    name: name,
                    lastname: lastname,
                    email: email
                });
            } catch (error) {
                console.log('An error occurred: ' + error);
            }
        }

        fetchUserSession();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleNewPasswordConfirmChange = (e) => {
        setNewPasswordConfirm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/users/${username}`, {
            name: user.name,
            lastname: user.lastname,
            email: user.email,
        })
        .then(response => {
            alert('Perfil actualizado correctamente');
        })
        .catch(err => {
            setError('Error actualizando perfil');
        });
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== newPasswordConfirm) {
            setError('Las contraseñas no coinciden');
            return;
        }
        axios.put(`/users/newpassword/${username}`, {
            Password: newPassword,
        })
        .then(response => {
            alert('Contraseña actualizada correctamente');
        })
        .catch(err => {
            setError('Error actualizando la contraseña');
        });
    };

    return (
        <div>
            <Navbar />
            <div>
                <h2>Configuración de Usuario</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Nombre
                            <input 
                                type="text" 
                                name="name" 
                                value={user.name} 
                                onChange={handleChange} 
                            />
                        </label>
                        <label>
                            Apellido
                            <input 
                                type="text"
                                name="lastname"
                                value={user.lastname}
                                onChange={handleChange} 
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email:
                            <input 
                                type="email" 
                                name="email" 
                                value={user.email} 
                                onChange={handleChange} 
                            />
                        </label>
                    </div>
                    <button type="submit">Guardar Cambios</button>
                </form>

                <h2>Cambiar Contraseña</h2>
                <form onSubmit={handlePasswordSubmit}>
                    <div>
                        <label>
                            Nueva Contraseña:
                            <input 
                                type="password" 
                                name="newPassword" 
                                value={newPassword} 
                                onChange={handleNewPasswordChange} 
                            />
                        </label>
                        <label>
                            Confirmar Contraseña:
                            <input
                                type="password"
                                name="newPasswordConfirm"
                                value={newPasswordConfirm}
                                onChange={handleNewPasswordConfirmChange}
                            />
                        </label>
                    </div>
                    <button type="submit">Cambiar Contraseña</button>
                </form>

                {error && <p>{error}</p>}
            </div>
        </div>
    );
};

export default ConfigUser;