import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import detail from '../../assets/data/detail';
import Navbar from '../../components/Navbar/Navbar';  
import './InfoUsuarioPage.css';

const InfoUsuarioPage = () => {
    const [usuario, setUsuario] = useState({
        nombreCompleto: '',
        codigo: '',
        tieneLibroPrestado: false
    });
    const [selectedCategory, setSelectedCategory] = useState("all");

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        async function fetchUserSession() {
            try {
                const response = await fetch('http://localhost:4000/user', {
                    method: 'GET',
                    credentials: 'include'
                });
                const jsonData = await response.json();
                const {name, id} = jsonData;
                setUsuario({
                    nombreCompleto: name,
                    codigo: id,
                    tieneLibroPrestado: false
                });
            } catch (error) {
                console.log('An error occurred: ' + error);
            }
        }

        fetchUserSession();
    }, []);

    const products = detail[1]; 

    const filteredProducts = selectedCategory === "all" ? products : products.filter(product => product.category === selectedCategory);

    return (
        <div className="page-container">
            <Navbar /> {}
            <div className="info-container">
                <div className="info-form">
                    <h1>Información del Usuario</h1>
                    <p><strong>Nombre completo:</strong> {usuario.nombreCompleto}</p>
                    <p><strong>Código:</strong> {usuario.codigo}</p>
                    <p><strong>Libro prestado:</strong> {usuario.tieneLibroPrestado ? 'Sí' : 'No'}</p>

                    <h2>Mi historial de préstamos</h2>
                    <section className="products-list">
                        {filteredProducts.map((product, index) => (
                            <div className="product-item" key={index}>
                                <Link to={`/details/${product.id}`} className="product-link">
                                    <img src={product.image} alt={product.title} className="product-image" />
                                </Link>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default InfoUsuarioPage;
