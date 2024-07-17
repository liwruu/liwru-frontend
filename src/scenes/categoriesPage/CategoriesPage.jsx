import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import detail from '../../assets/data/detail'; 
import detail from '../../assets/data/detail'; 
import './CategoriesPage.css'; 

export default function CategoriesPage() {
export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const products = detail[1]; 

  const filteredProducts = selectedCategory === "all" ? products : products.filter(product => product.category === selectedCategory);

  return (
    <div className="categories-container">
      <div className="category_list">
        <button className="category-item" onClick={() => handleCategoryClick("all")}>All</button>
        <button className="category-item" onClick={() => handleCategoryClick("historia")}>History</button>
        <button className="category-item" onClick={() => handleCategoryClick("literatura")}>Literature</button>
        <button className="category-item" onClick={() => handleCategoryClick("cienciaficcion")}>Science Fiction</button>
        <button className="category-item" onClick={() => handleCategoryClick("clasicos")}>Classics</button>
        <button className="category-item" onClick={() => handleCategoryClick("materialuniversitario")}>University Material</button>
      </div>
      <section className="products-list">
        {filteredProducts.map((product, index) => (
          <div className="product-item" key={index}>
            <Link to={`/details/${product.id}`} className="product-link">
              <img src={product.image} alt={product.title} className="product-image" />
              <h2 className="product-title">{product.title}</h2>
              <p className="product-description">{product.description}</p>
              <span className={`product-availability ${product.available ? 'available' : 'not-available'}`}>
                {product.available ? 'Available' : 'Not available'}
              </span>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}