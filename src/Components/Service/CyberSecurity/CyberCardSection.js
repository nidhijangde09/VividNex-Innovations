import React from 'react';
import './CyberCardSection.css';

const cardData = [
    {
        category: "Data Services",
        title: "Ready your data for the new demands generative AI",
        link: "#"
    },
    {
        category: "Application Transformation",
        title: "Become a world-class software organization",
        link: "#"
    },
    {
        category: "Data Services",
        title: "Ready your data for the new demands generative AI",
        link: "#"
    },
        {
        category: "Application Transformation",
        title: "Become a world-class software organization",
        link: "#"
    },
    {
        category: "Data Services",
        title: "Ready your data for the new demands generative AI",
        link: "#"
    },
    {
        category: "Application Transformation",
        title: "Become a world-class software organization",
        link: "#"
    }
];

const CyberCardSection = () => {
    return (
        <div className="cyber-card-section">
            <h2 className="cyber-card-heading">Reinvent with cybersecurity.</h2>
            <div className="cyber-card-grid">
                {cardData.map((card, index) => (
                    <div className="cyber-card" key={index}>
                        <div className="cyber-card-content">
                            <div className="cyber-card-underline"></div>
                            <p className="cyber-card-category">{card.category.toUpperCase()}</p>
                            <h3 className="cyber-card-title">{card.title}</h3>
                            <a href={card.link} className="cyber-card-link">
                                Learn more <span className="arrow">➤</span>
                            </a>
                            <div className="cyber-card-hover-text">
                                <p>Explore how we help clients transform with innovation and cloud technology.</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CyberCardSection;
