import React from 'react';
import './TalentOrganizationCardSection.css';

import Modernization from './Modernization/Modernization';
import Modernization2 from './Modernization/Modernization2';
import Modernization3 from './Modernization/Modernization3';
import Modernization4 from './Modernization/Modernization4';


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
const TalentOrganizationCardSection = () => {
    return (
        <div className="cloud-card-section">
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

export default TalentOrganizationCardSection;
