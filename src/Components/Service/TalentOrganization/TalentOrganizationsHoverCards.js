import React from 'react';
import './TalentOrganizationsHoverCards.css';

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

const TalentOrganizationsHoverCards = () => {
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

export default TalentOrganizationsHoverCards;
