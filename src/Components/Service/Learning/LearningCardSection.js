import React from 'react';
import './LearningCardSection.css';

const cardData = [
    
    {
        category: "AI & Analytics Services",
        title: "Power your generative AI initiatives with prepared data",

        link: "#"
    },
    {
      category: "Data-Driven AI Solutions",
      title: "Ready your data to unlock generative AI potential",
        link: "#"
    },
    {
      category: "Advanced Data Services",
       title: "Equip your data for generative AI innovation",
        link: "#"
    },


    {
        category: "AI & Data Solutions",
         title: "Prepare your data to fuel generative AI initiatives",
        link: "#"
    }
];

const LearningCardSection  = () => {
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
                                <p>EDiscover how VividNex drives client transformation with cutting-edge innovation and cloud solutions.</p>
                            </div>
                             
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>

    );
};

export default LearningCardSection ;
