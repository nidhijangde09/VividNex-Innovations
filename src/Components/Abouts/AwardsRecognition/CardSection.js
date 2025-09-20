import React from 'react'
import './CloudCardSection.css';
import Modernization from '../../../View/Modernization/Modernization';
import Modernization2 from '../../../View/Modernization/Modernization2';
import Modernization3 from '../../../View/Modernization/Modernization3';
import Modernization4 from '../../../View/Modernization/Modernization4';



const cardData = [
    {
        category: "Data Services",
        title: "Ready your data for the new demands generative AI",
        link: "/Modernization ",
        hoverText: "Data-readiness is key—47% of CXOs say it’s their top challenge for Gen AI."
    },
    {
        category: "Application Transformation",
        title: "Lead with modern engineering practices and agile delivery",
        link: "/Modernization2 ",
        hoverText: "Legacy systems are holding 40% of companies back from realizing full cloud benefits. Modernization is the key to agility and growth."
    },
    {
        category: "Application Modernization",
        title: "Modernize your cloud to accelerate business impact",
        link: "/Modernization3 ",
        hoverText: "Modernization accounts for up to 40% of cloud spend—enabling enterprises to streamline operations, improve security, and accelerate innovation."
    },
    {
        category: "Edge Technology",
        title: "Real-time Processing. Localized. Scalable.",
        link: "/Modernization4 ",
        hoverText: "Smart devices generate constant data. Edge computing processes it closer to the source—boosting performance, cutting costs, and improving user experience."
    }
];
function CardSection() {
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
  )
}

export default CardSection;
