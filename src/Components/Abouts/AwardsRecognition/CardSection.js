import React from 'react'
import './CloudCardSection.css';
import Modernization from '../../../View/Modernization/Modernization';
import Modernization2 from '../../../View/Modernization/Modernization2';
import Modernization3 from '../../../View/Modernization/Modernization3';
import Modernization4 from '../../../View/Modernization/Modernization4';



const cardData = [
    {
        category: "Recognized 8 Consecutive Years by The Wall Street Journal",
        title: "For 8 years running, honored by The Wall Street Journal as a Best-Managed Company for outstanding performance across customer, employee, innovation, social, and financial metrics.",
        hoverText: "8 years of recognition from The Wall Street Journal as a Best-Managed Company – a testament to our people, innovation, and impact."
    },
     {
        category: "Brand Finance US 500: Ranked No. 20 with AAA+ rating",
        title: "Our brand achieved a AAA+ rating and grew to $41.5B in value, earning the No. 20 spot on Brand Finance US 500 for the 12th year in a row.",
        hoverText: "Proud to be ranked No. 20 on the Brand Finance US 500, with our AAA+ brand rating and value reaching $41.5B for the 12th consecutive year."
    },
 
    {
        category: "TIME100 Most Influential People – Virendra Kamble named one of the Innovators in 2024",
        title: "Our Chair and CEO, Virendra Kamble, honored as a TIME100 Innovator 2024",
        hoverText: "Proud moment as our Chair and CEO, Virendra Kamble, is honored on the TIME100 Most Influential People list as one of the Innovators of 2024, celebrating his transformative leadership and contributions."
    },
    {
        category: "No. 9 among India’s leading multinationals – Fortune",
        title: "Earned the No. 9 spot on Fortune India’s MNC 500, spotlighting top global companies contributing to India’s economic growth.",
        hoverText: "Fortune India honors us at No. 9 on its inaugural MNC 500, a testament to our growth and contribution to the nation’s progress."
    },
    {
        category: "Ranked #1 by Forbes among the World’s Best",
        title: "Forbes recognized Accenture as the leading management consulting firm, most recommended across industries and functional areas worldwide.",
        hoverText: "Proud to be named by Forbes as the World’s Best Management Consulting Firm, trusted by clients and consultants across the globe."
    }
];
function CardSection() {
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
  )
}

export default CardSection;
