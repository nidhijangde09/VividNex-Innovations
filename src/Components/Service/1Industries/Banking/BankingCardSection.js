import React from 'react';
import './BankingCardSection.css';


import { Link } from 'react-router-dom';
import ModernizationDA from './Modernization/ModernizationDA';
import Modernization2DA from './Modernization/Modernization2DA';
import Modernization3DA from './Modernization/Modernization3DA';
import Modernization4DA from './Modernization/Modernization4DA';



const cardData = [

{
    category: "Cloud-Native Transformation",
    title: "Accelerate Cloud Adoption with Future-Ready Architectures",
     link: "/ModernizationDA",
    hoverText: "Migrating to the cloud is just the beginning. Vividnex helps rearchitect workloads to be agile, scalable, and optimized for continuous innovation."
},
{
    category: "Intelligent Automation",
    title: "Reimagine Operations with AI and Automation",
    link: "/Modernization2DA",
    hoverText: "Manual processes limit growth. Streamline workflows with AI-driven automation to enhance efficiency, reduce costs, and elevate customer experience."
},
{
    category: "Cyber Resilience",
    title: "Secure Your Enterprise for the AI-Driven Future",
     link: "/Modernization3DA",
    hoverText: "Modern threats require modern defenses. Vividnex embeds advanced security across cloud and AI ecosystems to protect data, systems, and trust."
},
{
    category: "Sustainable IT",
    title: "Build Green Tech Foundations with Smart Cloud Strategies",
    link: "/Modernization2DA",
    hoverText: "Sustainability is a growth driver. Optimize energy use and reduce carbon footprint with intelligent cloud and data center solutions."
}

];

const BankingCardSection = () => {
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

export default BankingCardSection;
