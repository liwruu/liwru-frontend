import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import detail from '../../assets/data/detail';
import './InfoUsuarioPage.css';

const InfoUsuarioPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };
    // Datos de ejemplo del usuario
    const usuario = {
        nombreCompleto: 'Juan Pérez',
        codigoAlumno: '12345678',
        tieneLibroPrestado: true,
    };
    const products = detail[1];

    const filteredProducts = selectedCategory === "all" ? products : products.filter(product => product.category === selectedCategory);

    return (
        <div className="info-container">
            <h1>Información del Usuario</h1>
            <p><strong>Nombre completo:</strong> {usuario.nombreCompleto}</p>
            <p><strong>Código de alumno:</strong> {usuario.codigoAlumno}</p>
            <p><strong>Libro prestado:</strong> {usuario.tieneLibroPrestado ? 'Sí' : 'No'}</p>

            <h1> Mi historial de prestamos</h1>
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

    );
};

export default InfoUsuarioPage;