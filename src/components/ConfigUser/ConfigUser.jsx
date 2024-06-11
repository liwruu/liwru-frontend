import React, { useState, useEffect } from 'react';

const ConfigUser = ({ username }) => {
    const [user, setUser] = useState({
        name:' ',
        lastname:' ',
        email: ''
    });
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`/users/${username}`)
            .then(response => {
                setUser(response.data);
            })
            .catch(err => {
                setError('Error fetching user data');
            });
    }, [username]);

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

    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/users/${username}`, {
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            password: password ? password : undefined,
        })
        .then(response => {
            alert('Perfil actualizado correctamente');
        })
        .catch(err => {
            setError('Error actualizando perfil');
        });
    };


    return (
        <div>
            <h2>Profile Settings</h2>
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
                            name = 'lastname'
                            value = {user.lastname}
                            onChange={handleChange} />
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
                <div>
                    <label>
                        New Password:
                        <input 
                            type="password" 
                            name="password" 
                            value={password} 
                            
                            onChange={handlePasswordChange} 
                        />
                    </label>
                </div>
                <button type="submit">Guardar Cambios</button>
            </form>
        </div>
    );
};

export default ConfigUser;