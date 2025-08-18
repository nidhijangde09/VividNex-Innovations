import React from 'react';
import './EmergingHoverCards.css';

const cardData = [
 
  {
    title: "Top Cybersecurity Innovator 2024",
    description: "Vividnex ranked as a top innovator in cybersecurity for advanced threat protection solutions.",
    bgColor: "#045e85", // blue
  },
];

const EmergingHoverCards = () => {
  return (
    <div className="six-grid-wrapper">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="six-grid-card"
          style={{ backgroundColor: card.bgColor }}
        >
          <div className="six-grid-card-pattern" />
          <h2 className="six-grid-card-title">{card.title}</h2>
          <div className="six-grid-card-description">
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmergingHoverCards;
