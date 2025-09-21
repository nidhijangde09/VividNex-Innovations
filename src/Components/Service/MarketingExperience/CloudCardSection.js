import React from 'react';
import './CloudCardSection.css';
import ModernizationME from './Modernization/ModernizationME';
import Modernization2ME from './Modernization/Modernization2ME';
import Modernization3ME from './Modernization/Modernization3ME';
import Modernization4ME from './Modernization/Modernization4ME';

const cardData = [
    {
        category: "Data & AI",
        title: "Prepare Your Data for the Demands of Generative AI",
        link: "#",
        hoverText: "Data readiness is critical—47% of CXOs cite it as their top challenge for generative AI."
    },
    {
        category: "Digital Engineering",
        title: "Accelerate Innovation with Agile and Modern Practices",
        link: "#",
        hoverText: "With 40% of companies constrained by legacy systems, modernization has become essential to unlock cloud’s true potential, drive agility, and fuel growth."
    },
    {
        category: "Cloud Modernization",
        title: "Unlock Agility and Growth with a Future-Ready Cloud",
        link: "#",
        hoverText: "Modernization represents as much as 40% of cloud investments, helping enterprises streamline operations, strengthen security, and accelerate innovation."
    },
    {
        category: "Edge Computing",
        title: "Scalable, Localized, and Real-Time Processing",
        link: "#",
        hoverText: "Smart devices create nonstop data. Edge computing processes it at the source—boosting performance, reducing costs, and enhancing user experience."
    },

    {
        category: "Next-Gen Connectivity",
        title: "Build Secure and Scalable Networks for the Future",
        link: "#",
        hoverText: "Legacy networks can’t keep up with modern demands. Upgrading delivers enhanced performance, stronger security, and smarter collaboration."

    },
    {
        category: "Cloud Strategy & Innovation",
        title: "Design a Future-Ready Cloud for Business Growth",
        link: "#",
        hoverText: "Without a clear cloud strategy, opportunities are missed. Discover how to craft an approach that drives long-term growth and transformation."

    },
    {
        category: "Cloud Infrastructure Services",
        title: "Simplify IT Complexity for Seamless Transformation",
        link: "#",
        hoverText: "82% of top-performing companies leverage managed services to achieve cloud success. Partnering with experts ensures resilient, scalable, and future-ready IT infrastructure."

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

