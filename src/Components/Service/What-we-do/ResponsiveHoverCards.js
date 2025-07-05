import React from 'react';
import './ResponsiveHoverCards.css';

const cardData = [
  {
    title: "VLeader in Workday Services – Forrester Wave™ Q2 2024",
    description: "In the 2024 report, Vividnex was recognized among top Workday service providers, earning the highest score in Current Offering and strong ratings in Strategy and Market Presence.The evaluation covered 12 providers across 25 criteria, including Workday HCM, Financial Management, Extend, Adaptive Planning, and Analytics & Reporting.",
    image: "https://images.pexels.com/photos/3137052/pexels-photo-3137052.jpeg",
    direction: "right",
    alignment: "flex-start",
  },
  {
    title: "Vividnex named a Leader in Everest Group’s 2024 Marketing Services PEAK Matrix.",
    description: "Per the report, “Vividnex streamlined its digital and creative units to form Vividnex Spark, a unified, tech-driven marketing powerhouse.”In this assessment, Everest Group evaluated 34 marketing services providers. Vividnex emerged as the top Leader on both the Vision & Capability and Market Impact axes.",
    image: "https://images.pexels.com/photos/3137052/pexels-photo-3137052.jpeg",
    direction: "right",
    alignment: "flex-end",
  },
  {
    title: "Leader in Life Sciences R&D Innovation Recognized in IDC MarketScape 2024 for lab technology and consulting excellence.",
    description: "Vividnex is recognized as a Leader in both “Strategies” and “Capabilities” in the IDC MarketScape 2024 report. The assessment evaluated 13 vendors supporting Lab of the Future (LotF) initiatives—helping modernize labs from experiment design through manufacturing.",
    image: "https://images.pexels.com/photos/3137052/pexels-photo-3137052.jpeg",
    direction: "left",
    alignment: "flex-start",
  },
];

const ResponsiveHoverCards = () => {
  return (
    <div className="hover-card-wrapper">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="hover-card-row"
          style={{ justifyContent: card.alignment }}
        >
          <div className={`hover-card hover-slide-${card.direction}`}>
            <img src={card.image} alt={card.title} className="hover-card-image" />
            <h2 className="hover-card-title">{card.title}</h2>
            <div className="hover-card-description">
              <p>{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResponsiveHoverCards;
