import React from 'react';
import './FinanceManagementCardSection.css';

import ModernizationFM from './Modernization/ModernizationFM';
import Modernization2FM from './Modernization/Modernization2FM';
import Modernization3FM from './Modernization/Modernization3FM';
import Modernization4FM from './Modernization/Modernization4FM';


const cardData = [


    {
        category: "Modernization Services",
        title: "Update your cloud foundation to power AI",
        link: "/ModernizationFM",
        hoverText: "25-40% of enterprise cloud spend goes to modernization. Coordinated modernization efforts transform tech to optimize processes, boost security, spark innovation and drive growth."
    },
    {
        category: "Edge Technology",
        title: "Real-time Processing. Localized. Scalable.",
        link: "/Modernization2FM",
        hoverText: "Smart devices generate constant data. Edge computing processes it closer to the source—boosting performance, cutting costs, and improving user experience."
    },
   
   
    {
        category: "Managed Cloud Infrastructure",
        title: "Manage IT Complexity for Seamless Transformation",
        link: "/Modernization3FM",
        hoverText: "82% of top-performing companies use managed services to unlock cloud success. Partnering with experts ensures resilient, scalable IT infrastructure."
    },
    {
        category: "Modern App Management at Scale",
        title: "Simplify Application Landscapes Using AI and Cloud",
        link: "/Modernization4FM",
        hoverText: "As application complexity grows, combining traditional managed services with cloud and gen AI accelerates value delivery."
    },
  

];

const FinanceManagementCardSection = () => {
    return (

     <div className="cloud-card-section">

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

                                <p>"Explore how we guide clients in harnessing innovation and cloud to achieve meaningful transformation."</p>

                            </div>

                         
                        </div>
                    </div>
                ))}
            </div>
        </div>
</div>
    );
};

export default FinanceManagementCardSection;
