import React from 'react';
import './CloudCardSection.css';
import ModernizationCS from './Modernization/ModernizationCS';
import Modernization2CS from './Modernization/Modernization2CS'
import Modernization3CS from './Modernization/Modernization3CS'
import Modernization4CS from './Modernization/Modernization3CS'


const cardData = [
    
    {
        category: "Top 31 on Interbrand Best Global Brands",
        title: "Ranked No. 31 on Interbrand’s Best Global Brands with a brand value of $21.9B, marking 23 consecutive years on the list.",
        hoverText: "Proudly ranked No. 31 on Interbrand’s Best Global Brands with a record $21.9B value, celebrating 23 years of global recognition."
    },
    {
        category: "Brand Finance Most Valuable Brands: No. 1 in Industry, $41.5B Value",
        title: "$41.5B Brand Value, #1 in Industry 7th Year, #39 Globally, 19 Years on Brand Finance List",
        hoverText: "#1 in Industry for 7th Year, $41.5B Brand Value, 19 Years on Brand Finance List",
    },
    {
        category: "$103.8B Brand Value – #20 on Kantar BrandZ Top 100, 20 Years on List",
        title: "Ranked No. 20 on Kantar BrandZ Top 100 Most Valuable Global Brands, valued at $103.8B, marking 20 consecutive years on the list.",

        hoverText: "Proudly valued at $103.8B, ranked #20 on Kantar BrandZ Top 100 for 20 consecutive years."
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

