import React from 'react';
import './HoverCards.css';

const cardData = [
  {
    title: "Card One",
    description: "This is the description for Card One.",
    image: "https://images.pexels.com/photos/3137052/pexels-photo-3137052.jpeg",
    direction: "left",
    alignment: "flex-start",  // right side
    link: "#",
  },
  {
    title: "Card Two",
    description: "This is the description for Card Two.",
    image: "https://images.pexels.com/photos/3137052/pexels-photo-3137052.jpeg",
    direction: "right",
    alignment: "flex-end",  // right side
  },
  {
    title: "Card Three",
    description: "This is the description for Card Three.",
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
