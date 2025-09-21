import React from 'react';
import './ConsumerCardSection.css';


import { Link } from 'react-router-dom';
import ModernizationL from './Modernization/ModernizationL';
import Modernization2L from './Modernization/Modernization2L';
import Modernization3L from './Modernization/Modernization3L';
import Modernization4L from './Modernization/Modernization4L';


const cardData = [
{
  category: "Intelligent Edge Solutions",
  title: "Enable Real-Time Performance at the Edge",
  link: "/Modernization2ET",
  hoverText: "Edge computing brings intelligence closer to data sources—reducing latency, improving efficiency, and elevating user experiences."
},
{
  category: "Strategic Cloud Architecture",
  title: "Design Future-Ready Cloud Strategies",
  link: "/Modernization4ET",
  hoverText: "Misaligned cloud strategies drain value. Tailor cloud architectures that support scalability, resilience, and long-term business growth."
},
{
  category: "Cloud Operations & Automation",
  title: "Streamline Complex IT with Expert Management",
  link: "/Modernization4ET",
  hoverText: "82% of high-performing firms rely on managed services to scale operations, ensure resilience, and reduce time-to-value in the cloud."
},
{
  category: "AI-Powered Application Services",
  title: "Simplify and Scale Your App Ecosystem",
  link: "/Modernization3ET",
  hoverText: "As apps grow in complexity, AI and cloud-native tools help manage them at scale—accelerating deployment and improving performance."
},
];

const ConsumerCardSection = () => {
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

export default ConsumerCardSection;
