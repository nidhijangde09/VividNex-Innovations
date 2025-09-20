import React from 'react';
import './MetaverseCardSection.css';
import Modernization from '../../../View/Modernization/Modernization';
import ModernizationM from './Modernization/ModernizationM';
import Modernization2M from './Modernization/Modernization2M';
import Modernization3M from './Modernization/Modernization3M';
import Modernization4M from './Modernization/Modernization4M';
import { Link } from 'react-router-dom';
const cardData = [
    {
        category: "Data Services",
        title: "Ready your data for the new demands generative AI",
        link: "/ModernizationM"
    },
    {
        category: "Application Transformation",
        title: "Become a world-class software organization",
        link: "/Modernization2M"
    },
    {
        category: "Data Services",
        title: "Ready your data for the new demands generative AI",
        link: ""
    },
    {
        category: "Application Transformation",
        title: "Become a world-class software organization",
        link: "/Modernization3M"
    },
    {
        category: "Data Services",
        title: "Ready your data for the new demands generative AI",
        link: "/Modernization4M"
    },
    {
        category: "Application Transformation",
        title: "Become a world-class software organization",
        link: "/Modernization"
    }
];

const MetaverseCardSection = () => {
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

export default MetaverseCardSection;
