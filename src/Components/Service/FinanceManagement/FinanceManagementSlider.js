import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FinanceManagementSlider.css";

const cardData = [
  {
    subtitle: "Ready to shape the future? Think smarter. Act bolder.",
    title: "Research Insights",
    description: "Generative AI is redefining the competitive landscape. The frontrunners are moving fast. Will you join them?",
    image: "https://img.freepik.com/premium-photo/blue-butterfly-purple-flower_1254813-81868.jpg",
    link: "/colombia"
  },
  {
    subtitle: "Lead the next era. Innovate smarter. Build bolder.",
    title: "AI Research Report",
    description: "Generative AI is transforming industries. The leaders are already taking action. Are you prepared to compete?",
    image: "https://img.freepik.com/premium-photo/woman-is-walking-front-orange-light-purple-walls_674594-12542.jpg",
    link: "/japan"
  },
  {
    subtitle: "The future belongs to those who think smarter and act boldly.",
    title: "Strategic Research",
    description: "Generative AI is changing the rules of business. Leading organizations are acting now. Are you one of them?",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/Gland-and-Skim-300x212:rad-card-half?fit=constrain&ts=1748917304083",
    link: "/france"
  },
  {
    subtitle: "Want to stay ahead? Think smarter. Build bolder.",
    title: "Industry Research Report",
    description: "Generative AI is reshaping markets. Leaders are moving decisively. Where do you stand?",
    image: "https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--1487ca38-19b9-4e5d-b08d-5c1a90a7c58b/ey-female-hand-interacting-with-chatbot-technology-on-a-digital-screen.jpg?quality=85&preferwebp=true",
    link: "/india"
  },
  {
    subtitle: "Shape the future. Think smarter. Act bolder.",
    title: "Generative AI Research",
    description: "Generative AI is transforming competition. Leaders are already taking action. Are you ready to lead?",
    image: "https://img.freepik.com/premium-photo/blue-butterfly-purple-flower_1254813-81868.jpg",
    link: "/usa"
  },
  {
    subtitle: "Innovate smarter. Build bolder. Lead tomorrow.",
    title: "AI & Innovation Insights",
    description: "Generative AI is rewriting industry rules. The frontrunners are moving fast. Where do you stand?",
    image: "https://img.freepik.com/premium-photo/woman-is-walking-front-orange-light-purple-walls_674594-12542.jpg",
    link: "/uk"
  },
  {
    subtitle: "Smarter thinking. Bolder action. Future-ready leadership.",
    title: "Strategic AI Research",
    description: "Generative AI is reshaping markets. The leaders are acting now. Will you keep up?",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/Gland-and-Skim-300x212:rad-card-half?fit=constrain&ts=1748917304083",
    link: "/germany"
  },
  {
    subtitle: "Lead with insight. Act with courage. Shape the future.",
    title: "AI Industry Report",
    description: "Generative AI is redefining competition. Leaders are seizing opportunities now. Are you ready?",
    image: "https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--1487ca38-19b9-4e5d-b08d-5c1a90a7c58b/ey-female-hand-interacting-with-chatbot-technology-on-a-digital-screen.jpg?quality=85&preferwebp=true",
    link: "/canada"
  },
];

const FinanceManagementSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(cardData.length / cardsPerSlide);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const getCardsForCurrentSlide = () => {
    const start = currentIndex * cardsPerSlide;
    return cardData.slice(start, start + cardsPerSlide);
  };

  return (
    <div className="ai-slider-container">
      <button className="slider-btn left" onClick={prevSlide}>←</button>
      <div className="ai-slider">
        {getCardsForCurrentSlide().map((card, index) => (
          <Link
            to={card.link}
            key={index}
            className="ai-slide-card"
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="ai-card-content">
              <p className="ai-card-category">{card.title}</p>
              <h3 className="ai-card-subtitle">{card.subtitle}</h3>
              <div className="ai-card-description">
                <p>{card.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <button className="slider-btn right" onClick={nextSlide}>→</button>
    </div>
  );
};

export default FinanceManagementSlider;
