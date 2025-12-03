import React from 'react';
import './DataAIGridHoverCard.css';

const cardData = [
  {
    title: "Global Climate Leadership Index",
    description: "VividNex Innovations has been recognized as a leader in driving sustainable technology solutions, earning repeated acknowledgment for its commitment to climate action and responsible innovation. We continue to be honored for advancing sustainability across our operations and value chain.",
    bgColor: "#045e85", // blue
  },
  {
    title: "Green Innovation Leadership Seal",
    description: "In 2023, VividNex Innovations was honored among a select group of companies to receive the Green Innovation Leadership Seal. This recognition highlights organizations that are pioneering sustainable solutions and accelerating progress toward building truly resilient and responsible markets.",
    bgColor: "#d11761", // red
  },
  
];

const DataAIGridHoverCards = () => {
  return (
    <div className="dataai-grid-wrapper">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="dataai-grid-card"
          style={{ backgroundColor: card.bgColor }}
        >
          <div className="dataai-grid-card-pattern" />
          <h2 className="dataai-grid-card-title">{card.title}</h2>
          <div className="dataai-grid-card-description">
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataAIGridHoverCards;
