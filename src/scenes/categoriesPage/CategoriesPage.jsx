import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../../assets/data/products'; 
import './CategoriesPage.css'; 

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === "all" ? products : products.filter(product => product.category === selectedCategory);

  return (
    <div className="categories-container">
      <div className="category_list">
        <button className="category-item" onClick={() => handleCategoryClick("all")}>Todo</button>
        <button className="category-item" onClick={() => handleCategoryClick("historia")}>Historia</button>
        <button className="category-item" onClick={() => handleCategoryClick("literatura")}>Literatura</button>
        <button className="category-item" onClick={() => handleCategoryClick("cienciaficcion")}>Ciencia Ficción</button>
        <button className="category-item" onClick={() => handleCategoryClick("clasicos")}>Clásicos</button>
        <button className="category-item" onClick={() => handleCategoryClick("materialuniversitario")}>Material Universitario</button>
      </div>
      <section className="products-list">
        {filteredProducts.map((product, index) => (
          <div className="product-item" key={index}>
            <Link to={`/products/${product.name}`} className="product-link">
              <img src={product.image} alt={product.name} className="product-image" />
              <h2 className="product-title">{product.name}</h2>
              <span className="product-description">{product.description}</span>
              <span className={`product-availability ${product.available ? 'available' : 'not-available'}`}>
                {product.available ? 'Disponible' : 'No disponible'}
              </span>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}