import React from 'react';
import './CloudCardSection.css';

const cardData = [
   
    
    {
        category: "Modern App Management at Scale",
        title: "Simplify Application Landscapes Using AI and Cloud",
        link: "#",
        hoverText: "As application complexity grows, combining traditional managed services with cloud and gen AI accelerates value delivery."
    },
    {
        category: "Secure the Cloud with Confidence",
        title: "Safeguard everything in your cloud ecosystem with end-to-end protection for data, apps, and infrastructure.",
        link: "#",
        hoverText: "For 41% of companies, security is a major cloud hurdle. A modern security strategy supports resilience and accelerates transformation."
    },
    {
        category: "Build Scalable Products and Platforms",
        title: "Build modern, AI-powered platforms to transform how you deliver value, scale operations, and engage users.",
        link: "#",
        hoverText: "Leverage modern platforms to unlock disruptive capabilities, accelerate revenue, and drive competitive advantage."
    },
    {
        category: "Cloud-Enabled Mainframe Transformation",
        title: "Modernize your mainframe to integrate with cloud and AI—unlocking new levels of flexibility and innovation.",
        link: "#",
        hoverText: "Companies often struggle with legacy systems. Embracing cloud and generative AI accelerates mainframe modernization and unlocks agility."
    }
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

