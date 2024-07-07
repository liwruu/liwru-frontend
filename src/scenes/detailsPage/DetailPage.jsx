import React from 'react';
import { Link, useParams } from 'react-router-dom';
import detail from '../../assets/data/detail';
import './DetailPage.css';

export default function DetailPage() {
  const { detailId } = useParams();
  const products = detail[1]; 
  const product = products.find(product => product.id.toString() === detailId);

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
          <img src={product.image} alt={product.title} className="product-image" />
        </div>
        <div className="product-details">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-author">Autor: {product.author}</p>
          <p className="product-description">{product.description}</p>
          <p className={`product-availability ${product.available ? 'available' : 'not-available'}`}>
            {product.available ? 'Disponible' : 'No disponible'}
          </p>
          <p className="product-additional-description">{product.additionalDescription}</p>
        </div>
      </div>
      <div className="buttons-container">
        <Link to="/categories" className="button">Volver a Categorías</Link>
        <Link to="/" className="button">Volver al Inicio</Link>
        <button className="button" onClick={handleReservation}>
          Realizar Reserva
        </button>
      </div>
    </div>
  );
}