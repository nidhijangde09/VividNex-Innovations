import React from 'react';
import './AutomotiveCardSection.css';


import { Link } from 'react-router-dom';
import ModernizationCY from './Modernization/ModernizationCY';
import Modernization2CY from './Modernization/Modernization2CY';
import Modernization3CY from './Modernization/Modernization3CY';
import Modernization4CY from './Modernization/Modernization4CY';



const cardData = [

    {
        category: "Cloud Modernization",
        title: "Reinvent Your Cloud Foundation to Unlock AI Potential",
        link: "/ModernizationCY",
        hoverText: "25-40% of enterprise cloud spend goes to modernization. Coordinated modernization efforts transform tech to optimize processes, boost security, spark innovation and drive growth."
    },
    {
        category: "Edge Computing",
        title: "Real-Time Insights. Locally Processed. Globally Scaled.",
        link: "/ModernizationCY",
        hoverText: "Smart devices generate constant data. Edge computing processes it closer to the source—boosting performance, cutting costs, and improving user experience."
    },

    
    {
        category: "Application Innovation",
        title: "Streamline Applications with AI and Cloud Innovation",
        link: "/Modernization4CY",
        hoverText: "As application complexity grows, combining traditional managed services with cloud and gen AI accelerates value delivery."
    },

    {
        category: "Mainframe Transformation",
        title: "Transform Your Mainframe: Integrate Cloud and AI for Next-Level Agility",
        link: "/Modernization2CY",
        hoverText: "Companies often struggle with legacy systems. Embracing cloud and generative AI accelerates mainframe modernization and unlocks agility."
    }


];

const AutomotiveCardSection= () => {
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

export default AutomotiveCardSection;
