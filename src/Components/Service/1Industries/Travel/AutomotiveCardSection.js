import React from 'react';
import './AutomotiveCardSection.css';

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

const AutomotiveCardSection= () => {
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

export default AutomotiveCardSection;
