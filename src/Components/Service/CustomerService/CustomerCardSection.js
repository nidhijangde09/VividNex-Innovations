import React from 'react';
import './CustomerCardSection.css';

const cardData = [
    {
        category: "Data Services",
        title: "Ready your data for the new demands generative AI",
        link: "#"
    },
    // ... (same data, keep as it is)
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
    // ... (same data, keep as it is)
    {
        category: "Application Transformation",
        title: "Become a world-class software organization",
        link: "#"
    }
];

const CustomerCardSection = () => {
    return (
        <div className="customer-card-section">
            <h2 className="customer-card-heading">Provide a support experience that leaves a mark and builds enduring value for your most important people.</h2>
            <div className="customer-card-grid">
                {cardData.map((card, index) => (
                    <div className="customer-card" key={index}>
                        <div className="customer-card-content">
                            <div className="customer-card-underline"></div>
                            <p className="customer-card-category">{card.category.toUpperCase()}</p>
                            <h3 className="customer-card-title">{card.title}</h3>
                            <a href={card.link} className="customer-card-link">
                                Learn more <span className="arrow">➤</span>
                            </a>
                            <div className="customer-card-hover-text">
                                <p>Explore how we help clients transform with innovation and cloud technology.</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerCardSection;
