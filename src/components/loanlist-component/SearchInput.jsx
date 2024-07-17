import React from 'react';
import './SearchInput.css';

function SearchInput({ value, onChange }) {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Buscar..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchInput;
