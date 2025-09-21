import React from 'react';
import './CloudCardSection.css';
import Modernization from './Modernization/Modernization';
import Modernization2 from './Modernization/Modernization2';
import Modernization3 from './Modernization/Modernization3';
import Modernization4 from './Modernization/Modernization4';


const cardData = [

    
   
    {
        category: "AI & Data Solutions",
        title: "Prepare your data for the demands of generative AI",
        link: "/Modernization",
        hoverText: "egacy networking can’t keep up with today’s demands. Upgrading enables better performance, stronger security, and smarter collaboration."
    },
    {
        category: "Advanced Data Services",
        title: "Ready your data to meet generative AI challenges",
        link: "/Modernization2",
        hoverText: "Without the right cloud strategy, value gets lost. Learn how to tailor your approach for long-term growth and transformation."
    },
    {
        category: "Data & AI Services",
        title: "Equip your data for next-generation generative AI",
        link: "/Modernization3",
        hoverText: "82% of top-performing companies use managed services to unlock cloud success. Partnering with experts ensures resilient, scalable IT infrastructure."
    },
    {
        category: "AI-Driven Data Solutions",
        title: "Get your data ready for generative AI innovation",
        link: "/Modernization4",
        hoverText: "As application complexity grows, combining traditional managed services with cloud and gen AI accelerates value delivery."
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

