import React from 'react';
import './SustainabilityConsultingCardSection.css';

const cardData = [
   [
  {
    category: "Data & AI",
    title: "Prepare Your Data for Generative AI Demands",
    link: "#"
  },
  {
    category: "Application Transformation",
    title: "Become a World-Class Software Organization",
    link: "#"
  },
  {
    category: "Cloud & Infrastructure",
    title: "Modernize Cloud for Scalable Business Impact",
    link: "#"
  },
  {
    category: "Edge & IoT",
    title: "Leverage Edge Computing for Real-Time Insights",
    link: "#"
  },
  {
    category: "Cybersecurity",
    title: "Secure Your Digital Ecosystem End-to-End",
    link: "#"
  },
  {
    category: "Intelligent Platforms",
    title: "Build Scalable, AI-Powered Solutions",
    link: "#"
  }
]
];

const SustainabilityConsultingCardSection = () => {
    return (
        <div className="dataai-card-section">
    
            <div className="dataai-card-grid">
                {cardData.map((card, index) => (
                    <div className="dataai-card" key={index}>
                        <div className="dataai-card-content">
                            <div className="dataai-card-underline"></div>
                            <p className="dataai-card-category">{card.category.toUpperCase()}</p>
                            <h3 className="dataai-card-title">{card.title}</h3>
                            <a href={card.link} className="dataai-card-link">
                                Learn more <span className="arrow">➤</span>
                            </a>
                            <div className="dataai-card-hover-text">
                                <p>Explore how we help clients transform with innovation and cloud technology.</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SustainabilityConsultingCardSection;
