import React, { useState } from 'react';
import './ReservationFormPage.css';

function ReservationFormPage() {
    const [formData, setFormData] = useState({
        name: '',
        bookTitle: '',
        isbn: '',
        date: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Reserva realizada:', formData);
        
        setFormData({
            name: '',
            bookTitle: '',
            isbn: '',
            date: '',
        });
    };

    return (
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
                    <label htmlFor="isbn">Código ISBN:</label>
                    <input
                        type="text"
                        id="isbn"
                        name="isbn"
                        value={formData.isbn}
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
    );
}

export default ReservationFormPage;
