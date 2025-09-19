import React from 'react';
import './TechnologyTransformationCardSection.css';

const cardData = [
    [
  {
    category: "Data & AI",
    title: "Prepare your data for the demands of generative AI",
    link: "#"
  },
  {
    category: "Application Modernization",
    title: "Transform into a world-class software organization",
    link: "#"
  },
  {
    category: "Cloud & Infrastructure",
    title: "Scale and innovate with next-gen cloud solutions",
    link: "#"
  },
  {
    category: "Cybersecurity",
    title: "Build resilient and secure digital operations",
    link: "#"
  },
  {
    category: "Customer Experience",
    title: "Design seamless and personalized user journeys",
    link: "#"
  },
  {
    category: "Sustainability",
    title: "Leverage technology to drive sustainable growth",
    link: "#"
  }
]

];

const TechnologyTransformationCardSection = () => {
    return (
        <div className="dataai-card-section">
    
            <div className="dataai-card-grid">
                {cardData.map((card, index) => (
                    <div className="dataai-card" key={index}>
                        <div className="dataai-card-content">
                            <div className="dataai-card-underline"></div>
                            <p className="dataai-card-category">{card.category.toUpperCase()}</p>
                            <h3 className="dataai-card-title">{card.title}</h3>
                            <a href={card.link} className="dataai-card-link">
                                Learn more <span className="arrow">➤</span>
                            </a>
                            <div className="dataai-card-hover-text">
                                <p>Explore how we help clients transform with innovation and cloud technology.</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnologyTransformationCardSection;
