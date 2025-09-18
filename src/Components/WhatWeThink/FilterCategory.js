import React, { useState } from 'react';
import FilterChips from './FilterChips';
import './FilterCategory.css';

const FilterCategory = ({ title, items, selectedItems, toggleItem }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="filter-category">
      <div className="filter-header" onClick={() => setExpanded(!expanded)}>
        <span>{expanded ? '−' : '+'} {title}</span>
      </div>
      {expanded && (
        <FilterChips items={items} selectedItems={selectedItems} toggleItem={toggleItem} />
      )}
    </div>
  );
};

export default FilterCategory;
