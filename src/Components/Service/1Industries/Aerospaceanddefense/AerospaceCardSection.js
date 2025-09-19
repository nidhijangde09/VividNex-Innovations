import React from 'react';
import './AerospaceCardSection.css';
import { Link } from 'react-router-dom';
import ModernizationCS from './Modernization/ModernizationCS';
import Modernization2CS from './Modernization/Modernization2CS';
import Modernization3CS from './Modernization/Modernization3CS';
import Modernization4CS from './Modernization/Modernization4CS';

const cardData = [

    {
        category: "Modernization Services",
        title: "Update your cloud foundation to power AI",
        link: "/ModernizationCS",
        hoverText: "25-40% of enterprise cloud spend goes to modernization. Coordinated modernization efforts transform tech to optimize processes, boost security, spark innovation and drive growth."
    },
    {
        category: "Edge Technology",
        title: "Real-time Processing. Localized. Scalable.",
        link: "/Modernization2CS",
        hoverText: "Smart devices generate constant data. Edge computing processes it closer to the source—boosting performance, cutting costs, and improving user experience."
    },

    {
        category: "Modern App Management at Scale",
        title: "Simplify Application Landscapes Using AI and Cloud",
        link: "/Modernization3CS",
        hoverText: "As application complexity grows, combining traditional managed services with cloud and gen AI accelerates value delivery."
    },

    {
        category: "Cloud-Enabled Mainframe Transformation",
        title: "Modernize your mainframe to integrate with cloud and AI—unlocking new levels of flexibility and innovation.",
        link: "/Modernization4CS",
        hoverText: "Companies often struggle with legacy systems. Embracing cloud and generative AI accelerates mainframe modernization and unlocks agility."
    }
];

const AerospaceCardSection = () => {
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

export default AerospaceCardSection;
