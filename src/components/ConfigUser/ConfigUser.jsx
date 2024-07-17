import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import './ConfigUser.css/';
import Navbar from '../../components/Navbar/Navbar';

const ConfigUser = () => {
    const [user, setUser] = useState({
        username: '',
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
                const {username, name, lastname, email} = jsonData;
                setUser({
                    username: username,
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const jsonData = {
            username: user.username,
            name: user.name,
            lastname: user.lastname,
            email: user.email
        };

        try {
            await axios.put(`/users/${user.username}`, jsonData);
            alert('Perfil actualizado correctamente');
        } catch (error) {
            console.log('An error occurred: ' + error);
        }
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        if (newPassword !== newPasswordConfirm) {
            setError('Las contraseñas no coinciden');
            return;
        }
    
        try {
            const response = await axios.put(`/users/newpassword/${user.username}`, {
                password: newPassword, // Asegúrate de usar 'password' en minúsculas
            });
            alert('Contraseña actualizada correctamente');
            setError('');
        } catch (error) {
            setError('Error actualizando la contraseña');
            console.error('An error occurred:', error);
        }
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