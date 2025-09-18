import React from 'react';
import './CloudCardSection.css';

const cardData = [
    {
        category: "Data Services",
        title: "Ready your data for the new demands generative AI",
        link: "#",
        hoverText: "Data-readiness is key—47% of CXOs say it’s their top challenge for Gen AI."
    },
    {
        category: "Application Transformation",
        title: "Lead with modern engineering practices and agile delivery",
        link: "#",
        hoverText: "Legacy systems are holding 40% of companies back from realizing full cloud benefits. Modernization is the key to agility and growth."
    },
    {
        category: "Application Modernization",
        title: "Modernize your cloud to accelerate business impact",
        link: "#",
        hoverText: "Modernization accounts for up to 40% of cloud spend—enabling enterprises to streamline operations, improve security, and accelerate innovation."
    },
    {
        category: "Edge Technology",
        title: "Real-time Processing. Localized. Scalable.",
        link: "#",
        hoverText: "Smart devices generate constant data. Edge computing processes it closer to the source—boosting performance, cutting costs, and improving user experience."
    },
    {
        category: "Cloud Foundations",
        title: "Scalable Cloud Infrastructure for Dynamic Business Growth",
        link: "#",
        hoverText: "raditional infrastructure can’t keep up. Modern platforms offer the compute, network, and data power needed to meet today’s demands—and tomorrow’s growth."
    },
    {
        category: "Network Infrastructure for the Future",
        title: "Secure, Scalable Networks That Move at the Speed of Business",
        link: "#",
        hoverText: "egacy networking can’t keep up with today’s demands. Upgrading enables better performance, stronger security, and smarter collaboration."
    },
    {
        category: "Future-Ready Cloud Strategy",
        title: "Strategic Cloud Planning & Design",
        link: "#",
        hoverText: "Without the right cloud strategy, value gets lost. Learn how to tailor your approach for long-term growth and transformation."
    },
    {
        category: "Managed Cloud Infrastructure",
        title: "Manage IT Complexity for Seamless Transformation",
        link: "#",
        hoverText: "82% of top-performing companies use managed services to unlock cloud success. Partnering with experts ensures resilient, scalable IT infrastructure."
    },
    {
        category: "Modern App Management at Scale",
        title: "Simplify Application Landscapes Using AI and Cloud",
        link: "#",
        hoverText: "As application complexity grows, combining traditional managed services with cloud and gen AI accelerates value delivery."
    },
    {
        category: "Secure the Cloud with Confidence",
        title: "Safeguard everything in your cloud ecosystem with end-to-end protection for data, apps, and infrastructure.",
        link: "#",
        hoverText: "For 41% of companies, security is a major cloud hurdle. A modern security strategy supports resilience and accelerates transformation."
    },
    {
        category: "Build Scalable Products and Platforms",
        title: "Build modern, AI-powered platforms to transform how you deliver value, scale operations, and engage users.",
        link: "#",
        hoverText: "Leverage modern platforms to unlock disruptive capabilities, accelerate revenue, and drive competitive advantage."
    },
    {
        category: "Cloud-Enabled Mainframe Transformation",
        title: "Modernize your mainframe to integrate with cloud and AI—unlocking new levels of flexibility and innovation.",
        link: "#",
        hoverText: "Companies often struggle with legacy systems. Embracing cloud and generative AI accelerates mainframe modernization and unlocks agility."
    }
];

const CloudCardSection = () => {
    return (
        <div className="cloud-card-section">
            <h2 className="cloud-card-heading">Reinvent with cloud</h2>
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

