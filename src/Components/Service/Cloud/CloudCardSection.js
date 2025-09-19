import React from 'react';
import './CloudCardSection.css';
import { Link } from 'react-router-dom';
 import  Modernization from '../../../View/Modernization/Modernization';
import Modernization2 from '../../../View/Modernization/Modernization2';
import  Modernization3 from '../../../View/Modernization/Modernization3';
import  Modernization4 from '../../../View/Modernization/Modernization4';
import Technology5 from '../../../View/Modernization/Technology5';

const cardData = [

    {
        category: "Modernization Services",
        title: "Update your cloud foundation to power AI",
        link: "/Modernization2",
        hoverText: "25-40% of enterprise cloud spend goes to modernization. Coordinated modernization efforts transform tech to optimize processes, boost security, spark innovation and drive growth."
    },
    {
        category: "Edge Technology",
        title: "Real-time Processing. Localized. Scalable.",
        link: "/Modernization2",
        hoverText: "Smart devices generate constant data. Edge computing processes it closer to the source—boosting performance, cutting costs, and improving user experience."
    },
   
    {
        category: "Future-Ready Cloud Strategy",
        title: "Strategic Cloud Planning & Design",
        link: "/Technology5",
        hoverText: "Without the right cloud strategy, value gets lost. Learn how to tailor your approach for long-term growth and transformation."
    },
    {
        category: "Managed Cloud Infrastructure",
        title: "Manage IT Complexity for Seamless Transformation",
        link: "/Modernization",
        hoverText: "82% of top-performing companies use managed services to unlock cloud success. Partnering with experts ensures resilient, scalable IT infrastructure."
    },
    {
        category: "Modern App Management at Scale",
        title: "Simplify Application Landscapes Using AI and Cloud",
        link: "/Modernization",
        hoverText: "As application complexity grows, combining traditional managed services with cloud and gen AI accelerates value delivery."
    },
  
    {
        category: "Cloud-Enabled Mainframe Transformation",
        title: "Modernize your mainframe to integrate with cloud and AI—unlocking new levels of flexibility and innovation.",
        link: "/Modernization2",
        hoverText: "Companies often struggle with legacy systems. Embracing cloud and generative AI accelerates mainframe modernization and unlocks agility."
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










