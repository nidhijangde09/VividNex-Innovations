import React from 'react';
import './CloudCardSection.css';
import ModernizationCS from './Modernization/ModernizationCS';
import Modernization2CS from './Modernization/Modernization2CS'
import Modernization3CS from './Modernization/Modernization3CS'
import Modernization4CS from './Modernization/Modernization3CS'


const cardData = [
    
    {
        category: "Application Modernization",
        title: "Modernize your cloud to accelerate business impact",
        link: "/ModernizationCS",
        hoverText: "Modernization accounts for up to 40% of cloud spend—enabling enterprises to streamline operations, improve security, and accelerate innovation."
    },
    {
        category: "Edge Technology",
        title: "Real-time Processing. Localized. Scalable.",
        link: "/Modernization2CS",
        hoverText: "Smart devices generate constant data. Edge computing processes it closer to the source—boosting performance, cutting costs, and improving user experience."
    },
    {
        category: "Cloud Foundations",
        title: "Scalable Cloud Infrastructure for Dynamic Business Growth",
        link: "/Modernization3CS",
        hoverText: "raditional infrastructure can’t keep up. Modern platforms offer the compute, network, and data power needed to meet today’s demands—and tomorrow’s growth."
    },
    {
        category: "Network Infrastructure for the Future",
        title: "Secure, Scalable Networks That Move at the Speed of Business",
        link: "/Modernization4CS",
        hoverText: "egacy networking can’t keep up with today’s demands. Upgrading enables better performance, stronger security, and smarter collaboration."
    }
 
 
];

const CloudCardSection = () => {
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

export default CloudCardSection;

