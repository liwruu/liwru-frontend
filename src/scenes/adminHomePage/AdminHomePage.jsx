import { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import './AdminHomePage.css';
import HeaderAdmin from "../../components/HeaderAdmin/HeaderAdmin";

export default function AdminHomePage() {
    const [borrowedToday, setBorrowedToday]=useState(null);
    const[error,setError]=useState(null)
    useEffect(()=>{
        async function fetchBorrowedBooks(){
            try {
                const response = await fetch('/api/books/borrowed-today');
                if(!response.ok){
                    throw new Error('ñao')
                }
                const data = await response.json();
                setBorrowedToday(data.borrowedToday)
            } catch (error) {
                setError(error)
        }}

        fetchBorrowedBooks();
    })
    
    const navigate = useNavigate();
    function handleAddBook(){
        navigate('/addbook')
    }

    function handleReservas(){
        navigate('/reservas')
    }

    function handleUsers(){
        navigate('/usuarios')
    }

    function handleAdvancedSearch(){
        navigate('/advanced-search')
    }


    return(
        <div className="adminPrincipal">
            <div className="adminlist">
                <ul className='elements'>
                    <li onClick={handleAddBook}>Agregar Material </li>
                    <li onClick={handleReservas}>Ver Reservas</li>
                    <li onClick={handleUsers}>Gestion Usuarios</li>
                    <li onClick={handleAdvancedSearch}>Busqueda Avanzada</li>
                </ul>
            </div>
            <div className="stats">
                <div className="prestados-hoy">
                    <p>
                        {borrowedToday !== null? borrowedToday:'Sin data disp'}
                    </p>
                </div>
            </div>
        </div>
        
    )
}