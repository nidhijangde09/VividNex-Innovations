import React from 'react';
import './CapitalCardSection.css';


import { Link } from 'react-router-dom';
import ModernizationD from './Modernization/ModernizationD';
import Modernization2D from './Modernization/Modernization2D';
import Modernization3D from './Modernization/Modernization3D';
import Modernization4D from './Modernization/Modernization4D';


const cardData = [
     {
  category: "Cloud Modernization",
  title: "Rebuild Your Cloud Foundation for AI Excellence",
      link: "/ModernizationD",
  hoverText: "Modernizing your cloud is key to unlocking AI’s full potential—boost efficiency, enhance security, and drive transformative growth."
},
{
  category: "Edge Computing",
  title: "Process Data Instantly, Wherever It’s Generated",
  link: "/Modernization2D",
  hoverText: "By bringing computing closer to data sources, edge technology improves speed, reduces latency, and cuts operational costs."
},
{
  category: "Cloud Strategy & Innovation",
  title: "Design Smart Cloud Plans for Lasting Impact",
  link: "/Modernization2D",
  hoverText: "A tailored cloud strategy aligns technology with business goals to fuel sustained growth and competitive advantage."
},
{
  category: "Cloud Infrastructure Management",
  title: "Simplify IT with Expert Managed Cloud Services",
  link: "/Modernization2D",
  hoverText: "Top companies trust managed cloud services to ensure resilient, scalable infrastructure that adapts to evolving needs."
},
{
  category: "AI-Driven Application Management",
  title: "Streamline Complex App Ecosystems Using AI and Cloud",
    link: "/Modernization4D",
  hoverText: "Combining AI with cloud management helps simplify app landscapes, accelerating deployment and maximizing value."
},
{
  category: "Mainframe Modernization",
  title: "Integrate Mainframes with Cloud and AI for Agility",
   link: "/Modernization2D",
  hoverText: "Modernizing mainframes with cloud and generative AI unlocks flexibility, reduces risks, and drives innovation."
}

];
const CapitalCardSection= () => {
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

export default CapitalCardSection;
