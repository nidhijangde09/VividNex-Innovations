import React from 'react';
import './AerospaceCardSection.css';
import { Link } from 'react-router-dom';
import ModernizationCS from './Modernization/ModernizationCS';
import Modernization2CS from './Modernization/Modernization2CS';
import Modernization3CS from './Modernization/Modernization3CS';
import Modernization4CS from './Modernization/Modernization4CS';

const cardData = [


    {
  category: "Sustainability in Cloud",
  title: "Make your cloud greener, smarter, and more efficient",
  link: "/ModernizationCS",
  hoverText: "Optimizing workloads, reducing carbon footprints, and adopting sustainable architectures make cloud a driver of both growth and responsibility."
},
{
  category: "Cloud Security",
  title: "Build resilience and trust in the cloud era",
  link: "/Modernization2CS",
  hoverText: "Advanced security frameworks powered by AI and automation safeguard data, ensure compliance, and defend against evolving threats."
},
{
  category: "Data & AI Integration",
  title: "Turn cloud data into intelligence at scale",
   link: "/Modernization3CS",
  hoverText: "By embedding AI into cloud platforms, organizations unlock predictive insights, accelerate decision-making, and fuel continuous innovation."
},
{
  category: "Cloud Migration",
  title: "Move faster, scale smarter",
   link: "/Modernization4CS",
  hoverText: "Seamless migration strategies help organizations reduce costs, minimize downtime, and set a foundation for future-ready operations."
}

];

const AerospaceCardSection = () => {
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

export default AerospaceCardSection;
