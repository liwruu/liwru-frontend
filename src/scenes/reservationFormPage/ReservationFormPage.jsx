// src/scenes/reservationFormPage/ReservationFormPage.jsx

import React, { useState } from 'react';
import './ReservationFormPage.css'; // Importa el archivo CSS

function ReservationFormPage() {
    const [formData, setFormData] = useState({
        name: '',
        bookTitle: '',
        date: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para manejar la reserva del libro, por ejemplo, enviar los datos a una API
        console.log('Reserva realizada:', formData);
    };

    return (
        <div className="container">
            <div className="form-wrapper">
                <h1>Reserva de Libros</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nombre:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="bookTitle">Título del Libro:</label>
                        <input
                            type="text"
                            id="bookTitle"
                            name="bookTitle"
                            value={formData.bookTitle}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="date">Fecha de Reserva:</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Reservar</button>
                </form>
            </div>
        </div>
    );
}

export default ReservationFormPage;
