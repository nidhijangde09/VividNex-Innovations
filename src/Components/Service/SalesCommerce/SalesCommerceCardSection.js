import React from 'react';
import './SalesCommerceCardSection.css';
import ModernizationSC from './Modernization/ModernizationSC';
import Modernization2SC from './Modernization/Modernization2SC';
import Modernization3SC from './Modernization/Modernization3SC';
import Modernization4SC from './Modernization/Modernization4SC';
import Modernization2 from '../../../View/Modernization/Modernization2'

const cardData = [
    {
        category: "Data Services",
        title: "Ready your data for the new demands generative AI",
        link: "/ModernizationSC"
    },
    {
        category: "Application Transformation",
        title: "Become a world-class software organization",
        link: "/Modernization2SC"
    },
    {
        category: "Data Services",
        title: "Ready your data for the new demands generative AI",
        link: "/Modernization3SC"
    },
   
   
    {
        category: "Application Transformation",
        title: "Become a world-class software organization",
        link: "/Modernization4SC"
    },
    {
        category: "Data Services",
        title: "Ready your data for the new demands generative AI",
        link: "/Modernization5SC"
    },
    {
        category: "Application Transformation",
        title: "Become a world-class software organization",
        link: "/Modernization2"
    }
];


const SalesCommerceCardSection = () => {
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

export default SalesCommerceCardSection;
