import React from 'react';
import './FilterChips.css';

const FilterChips = ({ items, selectedItems, toggleItem }) => {
  return (
    <div className="chips-container">
      {items.map(item => (
        <button
          key={item}
          className={`chip ${selectedItems.includes(item) ? 'selected' : ''}`}
          onClick={() => toggleItem(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default FilterChips;
