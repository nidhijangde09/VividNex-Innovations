import React from 'react';
import './TalentOrganizationCardSection.css';

const cardData = [
     {
    category: "AI & Data",
    title: "Unlock the full potential of generative AI with trusted data",
    link: "#"
  },
  {
    category: "Digital Engineering",
    title: "Build next-generation software products with speed and scale",
    link: "#"
  },
  {
    category: "Cloud Innovation",
    title: "Modernize your business with agile, secure cloud platforms",
    link: "#"
  },
  {
    category: "Cybersecurity",
    title: "Protect your enterprise with end-to-end digital resilience",
    link: "#"
  },
  {
    category: "Customer Experience",
    title: "Design personalized, human-centered experiences that inspire loyalty",
    link: "#"
  },
  {
    category: "Sustainability",
    title: "Harness technology to accelerate sustainable growth and impact",
    link: "#"
  }
];

const TalentOrganizationCardSection = () => {
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

export default TalentOrganizationCardSection;
