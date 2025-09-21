import React from 'react';
import './CustomerCardSection.css';
import ModernizationCS from './Modernization/ModernizationCS';
import Modernization2CS from './Modernization/Modernization2CS';
import Modernization3CS from './Modernization/Modernization3CS';
import Modernization4CS from './Modernization/Modernization4CS';

const cardData = [

    {
    category: "Cloud Security & Compliance",
    title: "Protect Data, Ensure Compliance, Build Trust",
    link: "/ModernizationCS",
    hoverText: "Robust cloud security and regulatory compliance safeguard critical data, reduce risk, and foster trust while enabling digital transformation at scale."
},
{
    category: "Data & Analytics Modernization",
    title: "Unlock Insights with Cloud-Driven Analytics",
    link: "/Modernization2CS",
    hoverText: "Modern data platforms and cloud analytics turn raw data into actionable insights, driving smarter decisions, operational efficiency, and competitive advantage."
},
{
    category: "Hybrid & Multi-Cloud Solutions",
    title: "Seamlessly Integrate Across Cloud Environments",
    link: "/Modernization3CS",
    hoverText: "Hybrid and multi-cloud strategies offer flexibility, scalability, and resilience, enabling organizations to optimize workloads across multiple platforms efficiently."
},
{
    category: "Cloud AI & Automation",
    title: "Accelerate Innovation with Intelligent Cloud",
     link: "/Modernization4CS",
    hoverText: "Integrating AI and automation into cloud operations streamlines processes, reduces costs, and enables faster, smarter business outcomes."
}

];

const CustomerCardSection = () => {
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

export default CustomerCardSection;
