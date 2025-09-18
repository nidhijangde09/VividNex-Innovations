import React from 'react';
import './FinanceManagementCardSection.css';

const cardData = [
  
    
  
 
    {
        category: "Data Services",
        title: "Prepare Your Data for the Next Wave of Generative AI",

        link: "#"
    },
    {
        category: "Data & Analytics",
        title: "Optimize Your Data for Generative AI Innovation",

        link: "#"
    },
    {
        category: "AI & Data Strategy",
        title: "Ready Your Data to Unlock Generative AI Potential",

        link: "#"
    },
    {
        category: "Advanced Data Solutions",
        title: "Empower Your Business with Generative AI-Ready Data",

        link: "#"
    },
    {
        category: "Intelligent Data Platforms",
        title: "Transform Your Data for Generative AI Success",

        link: "#"
    },

    {
        category: "Enterprise Data Solutions",
        title: "Enable Generative AI with Clean, Scalable Data",

        link: "#"
    }
];

const FinanceManagementCardSection = () => {
    return (
        <div className="cloud-card-section">
            <h2 className="cloud-card-heading">Transform with Cloud</h2>
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
                                <p>"Explore how we guide clients in harnessing innovation and cloud to achieve meaningful transformation."</p>
                            </div>
                             
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>

    );
};

export default FinanceManagementCardSection;
