import React, { useState } from 'react';
import '../styles/Filter.css';

const Filter = ({ onFilterChange, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onFilterChange({
      category: category,
      priceRange: priceRange,
      search: searchTerm
    });
  };

  const handlePriceChange = (e) => {
    const newPrice = parseInt(e.target.value);
    const newRange = [priceRange[0], newPrice];
    setPriceRange(newRange);
    onFilterChange({
      category: selectedCategory,
      priceRange: newRange,
      search: searchTerm
    });
  };

  const handleSearchChange = (e) => {
    const search = e.target.value;
    setSearchTerm(search);
    onFilterChange({
      category: selectedCategory,
      priceRange: priceRange,
      search: search
    });
  };

  return (
    <div className="filter-sidebar">
      <h3>Filtros</h3>
      
      <div className="filter-group">
        <h4>Búsqueda</h4>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      
      <div className="filter-group">
        <h4>Categoría</h4>
        <div className="category-list">
          <label>
            <input
              type="radio"
              name="category"
              checked={selectedCategory === ''}
              onChange={() => handleCategoryChange('')}
            />
            Todas
          </label>
          {categories.map((category) => (
            <label key={category}>
              <input
                type="radio"
                name="category"
                checked={selectedCategory === category}
                onChange={() => handleCategoryChange(category)}
              />
              {category}
            </label>
          ))}
        </div>
      </div>
      
      <div className="filter-group">
        <h4>Precio</h4>
        <div className="price-range">
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={handlePriceChange}
            className="range-slider"
          />
          <p>Hasta: ${priceRange[1]}</p>
        </div>
      </div>
    </div>
  );
};

export default Filter;
