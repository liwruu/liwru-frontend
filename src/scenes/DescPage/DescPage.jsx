import React from 'react';
import './ReservationDetailsPage.css';

export default function ReservationDetailsPage() {
    const reservation = {
        id: "123456789",
        reserveDate: "2024-05-27",
        returnDate: "2024-06-03",
        extended: false,
        borrowerName: "Juan Pérez",
        bookTitle: "Cien años de soledad"
    };

    return (
        <div className='reservation-details-page'> 
            <div className='reservation-details-page__header'> 
                <h1 className='reservation-details-page__header__title'>Detalles de la Reserva</h1>
            </div>
            <div className='reservation-details-page__content'> 
                <p><strong>ID de Reserva:</strong> {reservation.id}</p>
                <p><strong>Fecha de Reserva:</strong> {reservation.reserveDate}</p>
                <p><strong>Fecha de Devolución:</strong> {reservation.returnDate}</p>
                <p><strong>Reserva Extendida:</strong> {reservation.extended ? 'Sí' : 'No'}</p>
                <p><strong>Nombre del Prestatario:</strong> {reservation.borrowerName}</p>
                <p><strong>Título del Libro:</strong> {reservation.bookTitle}</p>
            </div>
        </div>
    );
}

