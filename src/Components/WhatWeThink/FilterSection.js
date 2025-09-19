import React, { useState } from 'react';
import FilterCategory from './FilterCategory';
import './FilterSection.css';

const FilterSection = () => {
  const contentTypes = ['Blog', 'Case Study', 'Live Interview', 'News Article', 'Perspective', 'Podcast', 'Research Report'];
  const topics = ['Cloud', 'Cybersecurity', 'AI', 'Learning', 'Strategy', 'Metaverse', 'Supply Chain', 'Marketing & Experience', 'Technology Transformation'];
  const industries = ['Automotive', 'Banking', 'Life Sciences', 'Retail', 'Travel', 'Utilities', 'Software & Platforms'];

  const [selectedContentTypes, setSelectedContentTypes] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);

  const toggleItem = (item, category, setCategory) => {
    setCategory(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const clearAll = () => {
    setSelectedContentTypes([]);
    setSelectedTopics([]);
    setSelectedIndustries([]);
  };

  return (
    <div className="filter-section">
      <h1>Stay ahead of change</h1>
      <p>Explore our research, insights, and examples of client impact to seize the forces of change and deliver results faster.</p>

      
      <div className="filters">
        <FilterCategory
          title="Topic"
          items={topics}
          selectedItems={selectedTopics}
          toggleItem={item => toggleItem(item, selectedTopics, setSelectedTopics)}
        />
        <FilterCategory
          title="Industry"
          items={industries}
          selectedItems={selectedIndustries}
          toggleItem={item => toggleItem(item, selectedIndustries, setSelectedIndustries)}
        />
        <FilterCategory
          title="Content Type"
          items={contentTypes}
          selectedItems={selectedContentTypes}
          toggleItem={item => toggleItem(item, selectedContentTypes, setSelectedContentTypes)}
        />
      </div>

      <div className="filter-buttons">
        <button onClick={clearAll} className="clear-btn">Clear all</button>
        <button className="show-btn">Show results</button>
      </div>
    </div>
  );
};

export default FilterSection;
