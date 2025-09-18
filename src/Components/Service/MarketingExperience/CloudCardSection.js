import React from 'react';
import './CloudCardSection.css';

const cardData = [
    {
        category: "Data & AI",
title: "Prepare Your Data for the Demands of Generative AI",
        link: "#",
        hoverText: "Data readiness is critical—47% of CXOs cite it as their top challenge for generative AI."
    },
    {
       category: "Digital Engineering",
title: "Accelerate Innovation with Agile and Modern Practices",
        link: "#",
        hoverText: "With 40% of companies constrained by legacy systems, modernization has become essential to unlock cloud’s true potential, drive agility, and fuel growth."
    },
    {
      category: "Cloud Modernization",
title: "Unlock Agility and Growth with a Future-Ready Cloud",
        link: "#",
        hoverText: "Modernization represents as much as 40% of cloud investments, helping enterprises streamline operations, strengthen security, and accelerate innovation."
    },
    {
       category: "Edge Computing",
title: "Scalable, Localized, and Real-Time Processing",
        link: "#",
        hoverText: "Smart devices create nonstop data. Edge computing processes it at the source—boosting performance, reducing costs, and enhancing user experience."
    },
    {category: "Cloud Foundations",
title: "Build a Scalable Cloud Core for Accelerated Growth",
        link: "#",
        hoverText: "Traditional infrastructure struggles to keep pace. Modern platforms provide the compute, network, and data capabilities needed to meet today’s demands and fuel tomorrow’s growth."

    {
       category: "Next-Gen Connectivity",
title: "Build Secure and Scalable Networks for the Future",
        link: "#",
        hoverText: "Legacy networks can’t keep up with modern demands. Upgrading delivers enhanced performance, stronger security, and smarter collaboration."

    },
    {category: "Cloud Strategy & Innovation",
title: "Design a Future-Ready Cloud for Business Growth",
        link: "#",
        hoverText: "Without a clear cloud strategy, opportunities are missed. Discover how to craft an approach that drives long-term growth and transformation."

    },
    {
        category: "Cloud Infrastructure Services",
        title: "Simplify IT Complexity for Seamless Transformation",
        link: "#",
        hoverText: "82% of top-performing companies leverage managed services to achieve cloud success. Partnering with experts ensures resilient, scalable, and future-ready IT infrastructure."

    },
    {
        category: "Intelligent App Management",
        title: "Streamline Applictions with the Power of AI and Cloud",
        link: "#",
        hoverText: "As applications grow more complex, integrating traditional managed services with cloud and generative AI accelerates value delivery."

    },
    {
       category: "Cloud Security",
        title: "Protect Your Data, Apps, and Infrastructure with End-to-End Security",
        link: "#",
        hoverText: "For 40% of companies, security remains a top cloud challenge. Implementing a modern security strategy enhances resilience and accelerates transformation."

    },
    {
        category: "Scalable Products & Platforms",
         title: "Create AI-Powered Platforms to Transform Value Delivery and User Engagement",
        link: "#",
        hoverText:"Leverage modern platforms to unlock breakthrough capabilities, accelerate revenue, and gain a competitive edge."

    },
    {
        category: "Mainframe Modernization",
        title: "Integrate Mainframe with Cloud and AI to Unlock Flexibility and Innovation",
        link: "#",
        hoverText: "Many companies struggle with legacy systems. Adopting cloud and generative AI accelerates mainframe modernization and unlocks greater agility."

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

