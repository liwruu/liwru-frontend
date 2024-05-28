import React from 'react';
import './ReservationMadePage.css';


export default function ReservationMadePage() {
    return (
        <div className='confirmation-page'> 
            <div className='confirmation-page__header'> 
                <h1 className='confirmation-page__header__title'>¡Reserva Realizada!</h1>
            </div>
            <div className='confirmation-page__content'> 
                <p className='confirmation-page__content__message'>¡Tu reserva se ha realizado correctamente!</p> 
            </div>
        </div>
    );
}
