import React from 'react';
import './CloudCardSection.css';

const cardData = [
    {
        category: "AI & Data Solutions",
title: "Prepare your data for the demands of generative AI",

        link: "#",
        hoverText: "Data-readiness is key—47% of CXOs say it’s their top challenge for Gen AI."
    },
    {
        category: "Advanced Data Services",
title: "Ready your data to meet generative AI challenges",

        link: "#",
        hoverText: "Legacy systems are holding 40% of companies back from realizing full cloud benefits. Modernization is the key to agility and growth."
    },
    {category: "Data & AI Services",
title: "Equip your data for next-generation generative AI",

        link: "#",
        hoverText: "Modernization accounts for up to 40% of cloud spend—enabling enterprises to streamline operations, improve security, and accelerate innovation."
    },
    {
      category: "AI-Driven Data Solutions",
title: "Get your data ready for generative AI innovation",

        link: "#",
        hoverText: "Smart devices generate constant data. Edge computing processes it closer to the source—boosting performance, cutting costs, and improving user experience."
    },
    {
       category: "Data Innovation",
title: "Prepare your data to power generative AI initiatives",

        link: "#",
        hoverText: "raditional infrastructure can’t keep up. Modern platforms offer the compute, network, and data power needed to meet today’s demands—and tomorrow’s growth."
    },
    {category: "AI & Data Solutions",
title: "Prepare your data for the demands of generative AI",
 link: "#",
        hoverText: "egacy networking can’t keep up with today’s demands. Upgrading enables better performance, stronger security, and smarter collaboration."
    },
    {
       category: "Advanced Data Services",
       title: "Ready your data to meet generative AI challenges",
       link: "#",
        hoverText: "Without the right cloud strategy, value gets lost. Learn how to tailor your approach for long-term growth and transformation."
    },
    {
        category: "Data & AI Services",
        title: "Equip your data for next-generation generative AI",
        link: "#",
        hoverText: "82% of top-performing companies use managed services to unlock cloud success. Partnering with experts ensures resilient, scalable IT infrastructure."
    },
    {
        category: "AI-Driven Data Solutions",
        title: "Get your data ready for generative AI innovation",
        link: "#",
        hoverText: "As application complexity grows, combining traditional managed services with cloud and gen AI accelerates value delivery."
    },
    {
        category: "Data Innovation",
        title: "Prepare your data to power generative AI initiatives",
        link: "#",
        hoverText: "For 41% of companies, security is a major cloud hurdle. A modern security strategy supports resilience and accelerates transformation."
    },
    {
        category: "Data Innovation",
        title: "Prepare your data to power generative AI initiatives",
        link: "#",
        hoverText: "Leverage modern platforms to unlock disruptive capabilities, accelerate revenue, and drive competitive advantage."
    },
    {
       category: "Data-Driven AI Solutions",
       title: "Prepare and power your data for generative AI success",
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

