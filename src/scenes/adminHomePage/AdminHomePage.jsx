import { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import './AdminHomePage.css';
import Navbar from "../../components/Navbar/Navbar";

export default function AdminHomePage() {
   
    
    const navigate = useNavigate();
    function handleAddBook(){
        navigate('/addbook')
    }

    function handleReservas(){
        navigate('/reservedListAdmin')
    }

    function handleUsers(){
        navigate('/usersList')
    }


    return(
        <div>
        <div>
            <Navbar />
        </div>
        <div className="adminPrincipal">
            <div className="adminlist">
                <ul className='elements'>
                    <li onClick={handleAddBook}>Agregar Material </li>
                    <li onClick={handleReservas}>Ver Reservas</li>
                    <li onClick={handleUsers}>Gestion Usuarios</li>
                </ul>
            </div>
            <div className="stats">
                <div className="prestados-hoy">
                    <p>
                        Sin data disponible 
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}