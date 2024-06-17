import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../../assets/data/products';
import './DetailPage.css';

export default function DetailPage() {
  const { productName } = useParams();
  const product = products.find(product => product.name === productName);

  if (!product) {
    return <div>No se encontró el producto</div>;
  }

  const handleReservation = () => {
    if (!product.available) {
      alert("Artículo no disponible");
    } else {
      alert("Reserva realizada exitosamente");
    }
  };

  return (
    <div className="detail-container">
      <div className="product-item">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-image" />
        </div>
        <div className="product-details">
          <h2 className="product-title">{product.name}</h2>
          <p className="product-author">Autor: {product.author}</p>
          <span className="product-description">{product.description}</span>
          <span className="product-availability">
            {product.available ? 'Disponible' : 'No disponible'}
          </span>
          <span className="product-additional-description">{product.additionalDescription}</span>
        </div>
      </div>
      <div className="buttons-container">
        <Link to="/categories" className="button">Volver a Categorías</Link>
        <Link to="/" className="button">Volver al Inicio</Link> {/* Nuevo botón añadido */}
        <button className="button" onClick={handleReservation}>
          Realizar Reserva
        </button>
      </div>
    </div>
  );
}