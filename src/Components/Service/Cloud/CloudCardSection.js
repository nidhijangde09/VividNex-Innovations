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
    category: "Cloud Modernization",
    title: "Update your cloud foundation to power AI",
    link: "/Modernization2",
    hoverText: "Modernizing cloud environments can reduce costs by up to 40% while optimizing processes, enhancing security, sparking innovation, and accelerating business growth."
},
{
    category: "Edge & IoT Solutions",
    title: "Real-time Processing. Localized. Scalable.",
    link: "/Modernization2",
    hoverText: "Edge computing processes data closer to the source, improving speed, lowering costs, and delivering superior user experiences for smart devices and IoT networks."
},
{
    category: "Cloud Strategy & Planning",
    title: "Strategic Cloud Planning & Design",
    link: "/Technology5",
    hoverText: "A tailored cloud strategy ensures long-term value, enabling scalable growth, optimized workflows, and seamless digital transformation across the enterprise."
},
{
    category: "Managed Cloud Services",
    title: "Manage IT Complexity for Seamless Transformation",
    link: "/Modernization",
    hoverText: "82% of high-performing companies rely on managed services to simplify IT complexity, ensuring resilient, scalable, and secure cloud infrastructure."
},
{
    category: "AI-Driven App Management",
    title: "Simplify Application Landscapes Using AI and Cloud",
    link: "/Modernization",
    hoverText: "Combining AI with cloud-based managed services accelerates application modernization, simplifies operations, and drives faster value delivery at scale."
},
{
    category: "Mainframe Modernization",
    title: "Modernize your mainframe to integrate with cloud and AI—unlocking new levels of flexibility and innovation.",
    link: "/Modernization2",
    hoverText: "Legacy systems often hinder agility. Integrating cloud and generative AI transforms mainframes, enabling faster innovation, scalability, and operational efficiency."
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










