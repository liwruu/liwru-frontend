import React, { useState, useEffect } from 'react';

const ConfigUser = ({ username }) => {
    const [user, setUser] = useState({
        fullName: '',
        phoneNumber: '',
        email: ''
    });
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(`/getUser/users/${username}`)
            .then(response => response.json())
            .then(data => {
                setUser(data);
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
        fetch(``, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullName: user.fullName,
                phoneNumber: user.phoneNumber,
                email: user.email,
                password: password ? password : undefined,
            })
        })
        .then(response => response.json())
        .then(data => {
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
                        Full Name:
                        <input 
                            type="text" 
                            name="fullName" 
                            value={user.fullName} 
                            onChange={handleChange} 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Phone Number:
                        <input 
                            type="text" 
                            name="phoneNumber" 
                            value={user.phoneNumber} 
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
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default ConfigUser;