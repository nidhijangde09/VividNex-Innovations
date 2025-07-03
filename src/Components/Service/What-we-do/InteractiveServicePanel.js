import React, { useState } from 'react';
import './InteractiveServicePanel.css';

const items = [
  {
    label: "Cloud",
    title: "Empower the World Through Cloud",
    description:
      "From startups to enterprises, cloud drives reinvention and meets evolving human and business needs in real time.",
    image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Cloud-16x9?fmt=webp-alpha",
    link: "#",
  },
   {
    label: "Cloud",
    title: "Empower the World Through Cloud",
    description:
      "From startups to enterprises, cloud drives reinvention and meets evolving human and business needs in real time.",
    image: "https://dynamicmedia.accenture.com/is/content/accenture/Accenture-Cloud-16x9?fmt=webp-alpha",
    link: "#",
  },
 
];

const InteractiveServicePanel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="interactive-panel">
      <div className="interactive-left-menu">
        {items.map((item, index) => (
          <div
            key={index}
            className={`interactive-menu-item ${index === activeIndex ? 'active' : ''}`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="interactive-right-panel">
        <h2>{items[activeIndex].title}</h2>
        <p>{items[activeIndex].description}</p>
        <img src={items[activeIndex].image} alt={items[activeIndex].label} />
      </div>
    </div>
  );
};

export default InteractiveServicePanel;
