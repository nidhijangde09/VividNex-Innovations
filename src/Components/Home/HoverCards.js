import React from 'react';
import './HoverCards.css';

const cardData = [
  {
    title: "A Great Place To Work",
    description: "We are proud to be ranked No. 6 on the Great Place To Work® World's Best Workplaces™ list, a recognition based on our people’s feedback about trust, pride, and camaraderie at Vividnex.",
    image: "https://images.pexels.com/photos/3137052/pexels-photo-3137052.jpeg",
    direction: "left",
    alignment: "flex-start",  // right side
    link: "#",
  },
  {
    title: "The Top Consulting Frim",
    description: "Ranked No. 1 among the World’s Best Management Consulting Firms.Forbes honored Accenture as the top firm most recommended globally by consultants and clients across all industries and functions.",
    image: "https://images.pexels.com/photos/3137052/pexels-photo-3137052.jpeg",
    direction: "right",
    alignment: "flex-end",  // right side
  },
  {
    title: "An Influential Innovator",
    description: "Julie Sweet, our Chair and CEO, ranked No. 2 on Fortune’s Most Powerful Women in Business 2025, was named to the TIME100 Most Influential People of 2024, and received the Anti-Defamation League’s Courage Against Hate Award in 2024. At Accenture, she leads our teams in helping companies continuously reinvent with innovation and people at the center.",
    image: "https://images.pexels.com/photos/3137052/pexels-photo-3137052.jpeg",
    direction: "left",
    alignment: "flex-start",  // left side
  },
];

const HoverCards = () => {
  return (
    
    <div className="custom-card-wrapper">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="custom-card-row"
          style={{ justifyContent: card.alignment }}
        >
          <div className={`custom-card custom-slide-${card.direction}`}>
            <img src={card.image} alt={card.title} className="custom-card-image" />
            <h2 className="custom-card-title">{card.title}</h2>
            <div className="custom-card-description">
              <p>{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HoverCards;
