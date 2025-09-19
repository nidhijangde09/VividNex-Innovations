import React from 'react';
import './StrategyConsultingCardSection.css';
import Modernization from './Modernization/Modernization';
import Modernization2 from './Modernization/Modernization2';
import Modernization3 from './Modernization/Modernization3';
import Modernization4 from './Modernization/Modernization4';


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
        category: "Managed Cloud Infrastructure",
        title: "Manage IT Complexity for Seamless Transformation",
        link: "/Modernization3CS",
        hoverText: "82% of top-performing companies use managed services to unlock cloud success. Partnering with experts ensures resilient, scalable IT infrastructure."
    },
    {
        category: "Modern App Management at Scale",
        title: "Simplify Application Landscapes Using AI and Cloud",
        link: "/Modernization4CS",
        hoverText: "As application complexity grows, combining traditional managed services with cloud and gen AI accelerates value delivery."
    },
  
]
const StrategyConsultingCardSection = () => {
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

export default StrategyConsultingCardSection;
