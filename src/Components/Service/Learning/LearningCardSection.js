import React from 'react';
import './LearningCardSection.css';

const cardData = [
    
    {
        category: "Data Services",
        title: "Ready your data for the new demands generative AI",
        link: "#"
    },
    {
        category: "Data Services",
        title: "Ready your data for the new demands generative AI",
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

const LearningCardSection  = () => {
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
                                <p>Explore how we help clients transform with innovation and cloud technology.</p>
                            </div>
                             
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>

    );
};

export default LearningCardSection ;
