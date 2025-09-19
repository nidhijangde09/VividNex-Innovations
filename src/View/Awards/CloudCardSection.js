import React from 'react';
import './CloudCardSection.css';

const cardData = [
   
    
    [
  {
    category: "Modern App Management at Scale",
    title: "Simplify Application Landscapes with AI and Cloud",
    link: "#",
    hoverText: "As application complexity grows, Vividnex combines managed services, cloud, and generative AI to accelerate value delivery."
  },
  {
    category: "Secure the Cloud with Confidence",
    title: "Protect Your Cloud Ecosystem End-to-End",
    link: "#",
    hoverText: "For 41% of companies, security is a major cloud challenge. Vividnex’s modern security strategies enhance resilience and speed up transformation."
  },
  {
    category: "Build Scalable Products and Platforms",
    title: "Create AI-Powered Platforms to Transform Value Delivery",
    link: "#",
    hoverText: "Vividnex helps organizations leverage modern platforms to unlock disruptive capabilities, accelerate revenue, and gain a competitive edge."
  },
  {
    category: "Cloud-Enabled Mainframe Transformation",
    title: "Modernize Mainframes with Cloud and AI",
    link: "#",
    hoverText: "Legacy systems slow innovation. Vividnex integrates cloud and generative AI to accelerate mainframe modernization and boost agility."
  }
]

];

const CloudCardSection = () => {
    return (
        <div className="cloud-card-section">
            <h2 className="cloud-card-heading">Reinvent with cloud</h2>
            <div className="cloud-card-grid">
                {cardData.map((card, index) => (
                    <div className="cloud-card" key={index}>
                        <div className="cloud-card-content">
                            <div className="cloud-card-underline"></div>
                            <p className="cloud-card-category">{card.category.toUpperCase()}</p>
                            <h3 className="cloud-card-title">{card.title}</h3>
                            <a href={card.link} className="cloud-card-link">
                                Learn more <span className="arrow">➤</span>
                            </a>
                            <div className="cloud-card-hover-text">
                                <p>{card.hoverText}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CloudCardSection;

