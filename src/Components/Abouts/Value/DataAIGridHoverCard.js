import React from 'react';
import './DataAIGridHoverCard.css';

const cardData = [
  
   {
    title: "VLeader in Workday Services – Forrester Wave™ Q2 2024",
    description: "In the 2024 report, Vividnex was recognized among top Workday service providers...",
    bgColor: "#045e85", // blue
  },
  {
    title: "Vividnex named a Leader in Everest Group’s 2024 Marketing Services PEAK Matrix.",
    description: "Per the report, “Vividnex streamlined its digital and creative units to form Vividnex Spark...",
    bgColor: "#d11761", // red
  },
  {
    title: "Leader in Life Sciences R&D Innovation Recognized in IDC MarketScape 2024.",
    description: "Vividnex is recognized as a Leader in both “Strategies” and “Capabilities” in the IDC MarketScape 2024 report...",
    bgColor: "#4b0076", // purple
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
