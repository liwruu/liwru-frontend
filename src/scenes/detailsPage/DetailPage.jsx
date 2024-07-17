import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import detail from '../../assets/data/detail';
import detail from '../../assets/data/detail';
import './DetailPage.css';

export default function DetailPage() {
  const { detailId } = useParams();
  const categories = detail[1];
  const [productData, setProductData] = useState(categories);
  const product = productData.find(product => product.id.toString() === detailId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleReservation = () => {
    if (!product.available) {
      alert("Item not available");
    } else {
      const updatedProducts = productData.map(p =>
        p.id === product.id ? { ...p, available: false } : p
      );
      setProductData(updatedProducts);
      alert("Reservation successful");
    }
  };

  const recommendations = productData.filter(
    item => item.type === product.type && item.id !== product.id
  ).slice(0, 5);

  return (
    <div className="detail-container">
      <div className="product-item">
        <div className="product-image-container">
          <img src={product.image} alt={product.title} className="product-image" />
        </div>
        <div className="product-details">
          <h2 className="product-title">{product.title}</h2>
          <div className="product-info">
            <div className="product-info-label">Author:</div>
            <div className="product-info-value">{product.author}</div>
          </div>
          <div className="product-info">
            <div className="product-info-label">ISBN:</div>
            <div className="product-info-value">{product.isbn}</div>
          </div>
          <div className="product-info">
            <div className="product-info-label">Pages:</div>
            <div className="product-info-value">{product.pages}</div>
          </div>
          <div className="product-info">
            <div className="product-info-label">Availability:</div>
            <div className={`product-info-value ${product.available ? 'available' : 'not-available'}`}>
              {product.available ? 'Available' : 'Not available'}
            </div>
          </div>
          <div className="product-info">
            <div className="product-info-label">Description:</div>
            <div className="product-info-value">{product.description}</div>
          </div>
          <div className="product-info">
            <div className="product-info-label">Summary:</div>
            <div className="product-info-value">{product.additionalDescription}</div>
          </div>
          <div className="buttons-container">
            <Link to="/categories" className="button">Back to Categories</Link>
            <button className="button" onClick={handleReservation}>
              Make a Reservation
            </button>
          </div>
        </div>
      </div>
      <div className="recommendations">
        <h3>You might be interested</h3>
        <div className="recommendation-items">
          {recommendations.map(rec => (
            <Link to={`/details/${rec.id}`} key={rec.id} className="recommendation-item">
              <img src={rec.image} alt={rec.title} className="recommendation-image" />
              <p className="recommendation-title">{rec.title}</p>
              <p className="recommendation-author">{rec.author}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}