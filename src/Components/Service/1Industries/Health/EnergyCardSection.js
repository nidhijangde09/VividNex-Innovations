import React from 'react';
import './EnergyCardSection.css';


import { Link } from 'react-router-dom';
import ModernizationME from './Modernization/ModernizationME';
import Modernization2ME from './Modernization/Modernization2ME';
import Modernization3ME from './Modernization/Modernization3ME';
import Modernization4ME from './Modernization/Modernization4ME';



const cardData = [

   {
  category: "AI-Enabled Cloud Transformation",
  title: "Rebuild Your Cloud to Unlock AI Innovation",
    link: "/ModernizationET",
  hoverText: "25–40% of enterprise cloud budgets go to modernization. A unified approach transforms infrastructure, boosts security, and accelerates innovation."
},
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
{
  category: "Legacy System Modernization",
  title: "Unlock Agility with Cloud-Connected Mainframes",
    link: "/Modernization2ET",
  hoverText: "Modernizing legacy systems with cloud and generative AI enables faster innovation, better integration, and future-ready agility."
}
];

const EnergyCardSection= () => {
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

export default EnergyCardSection;
