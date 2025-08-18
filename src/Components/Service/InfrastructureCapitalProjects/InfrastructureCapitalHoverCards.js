import React from 'react';
import './InfrastructureCapitalHoverCards';
const cardData = [
 
  {
    title: "Innovative AI Solutions for Enterprises",
    description: "Vividnex provides AI solutions that streamline business processes and enhance decision-making.",
    bgColor: "#d11761", // red
  },
  {
    title: "Awarded Best Cloud Services Provider 2024",
    description: "Vividnex was awarded for its exceptional cloud migration and management services globally.",
    bgColor: "#4b0076", // purple
  },
  {
    title: "Top Cybersecurity Innovator 2024",
    description: "Vividnex ranked as a top innovator in cybersecurity for advanced threat protection solutions.",
    bgColor: "#045e85", // blue
  },
];

const InfrastructureCapitalHoverCards = () => {
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

export default InfrastructureCapitalHoverCards;
