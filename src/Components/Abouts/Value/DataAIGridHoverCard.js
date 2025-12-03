import React from 'react';
import './DataAIGridHoverCard.css';

const cardData = [
  
   {
    title: "A Leader in Innovation and Transformation",
    description: "Our Founder and CEO, Virendra Kamble, is recognized for his visionary leadership and contributions to technology and sustainable innovation. Under his guidance, VividNex Innovations has become a trusted partner for clients seeking transformative solutions, with people and innovation at the heart of everything we do.",
    bgColor: "#045e85", // blue
  },
  {
    title: "A Great Place to Work®",
    description: "Ranked among the top companies on the Great Place to Work® list for fostering an engaging and supportive work environment.This recognition reflects feedback from our people, measuring trust, pride, and camaraderie at VividNex Innovations.",
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
