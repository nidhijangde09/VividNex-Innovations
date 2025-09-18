import React from 'react';
import './EmergingCardSection.css';

const cardData = [
    {
        category: "Next-Gen Analytics",
        title: "Turn Your Data into Generative AI-Ready Assets",
 
        link: "#"
    },
    {
       category: "Data & Analytics",
       title: "Optimize Your Data for Generative AI Innovation",

        link: "#"
    },
    
    {
      category: "Data Transformation",
      title: "Ready Your Data to Unlock Generative AI Potential",

        link: "#"
    },
    {
      category: "Advanced AI Solutions",
      title: "Empower Your Business with Generative AI-Ready Data",

        link: "#"
    },
    {
        category: "Intelligent Data Platforms",
        title: "Transform Your Data for Generative AI Success",

        link: "#"
    },
    {
       category: "Data Modernization",
       title: "Make Your Data Generative AI-Ready to Drive Innovation",

        link: "#"
    },
    {
       category: "Enterprise Data Solutions",
       title: "Enable Generative AI with Clean, Scalable Data",

        link: "#"
    },
    {
      category: "AI-Powered Data",
      title: "Future-Proof Your Data for Generative AI Applications",

        link: "#"
    },
    {
      category: "Data Intelligence",
      title: "Harness Your Data to Unlock Generative AI Insights",

        link: "#"
    },
    {
        category: "Data Modernization",
        title: "Make Your Data Generative AI-Ready to Drive Innovation",

        link: "#"
    },
    {
        category: "AI & Data Strategy",
        title: "Prepare Your Data for the Next Wave of Generative AI",

        link: "#"
    },

    {
        category: "Data & Analytics",
        title: "Optimize Your Data for Generative AI Innovation",

        link: "#"
    }
];

const EmergingCardSection = () => {
    return (
        <div className="cloud-card-section">
            <h2 className="cloud-card-heading">Accelerate Innovation with Cloud</h2>
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
                                <p>"See how we help clients drive transformation using cutting-edge innovation and cloud solutions."</p>
                            </div>
                             
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>

    );
};

export default EmergingCardSection;
