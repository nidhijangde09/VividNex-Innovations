import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AerospaceSlider.css";

const cardData = [
  {
    subtitle: "Want to lead the future? You must think smarter. And build bolder.",
    title: "Research Report",
    description: "Generative AI is rewriting the rules of competition. The leaders are acting now. Are you one of them?",
    image: "https://img.freepik.com/premium-photo/blue-butterfly-purple-flower_1254813-81868.jpg",
    link: "/colombia"
  },
  {
    subtitle: "Supply chains are getting smarter. Are you prepared to keep up?",
    title: "Research Report",
    description: "Traditional efficiency models are no longer enough. To stay competitive, supply chains must be intelligent, responsive, and resilient.",
    image: "https://img.freepik.com/premium-photo/woman-is-walking-front-orange-light-purple-walls_674594-12542.jpg",
    link: "/japan"
  },
  {
    subtitle: "Transforming the workplace through synergy between humans, AI, and robotics.",
    title: "Research Report",
    description: "VividNex is collaborating with Wharton to research how human strengths can integrate with AI and robotics for business innovation.",    image: "https://dynamicmedia.accenture.com/is/image/accenture/Gland-and-Skim-300x212:rad-card-half?fit=constrain&ts=1748917304083",
    image: "https://img.freepik.com/premium-photo/blue-butterfly-purple-flower_1254813-81868.jpg",
    link: "/france"
  },
  {
      subtitle: "Me, My Brand, and AI: Redefining the Future of Consumer Engagement",
      title: "Research Report",
      description: "AI is shifting from assistant to advisor, from helpful to deeply human. Resilient connections between people, brands, and AI will define market leadership.",
      image: "https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--1487ca38-19b9-4e5d-b08d-5c1a90a7c58b/ey-female-hand-interacting-with-chatbot-technology-on-a-digital-screen.jpg?quality=85&preferwebp=true",
    link: "/india"
  },
  {
    subtitle: "Empowering industries through sustainable AI solutions.",
    title: "Research Report",
    description: "Building AI solutions that accelerate sustainability goals across sectors.",
    image: "https://img.freepik.com/premium-photo/blue-butterfly-purple-flower_1254813-81868.jpg",
    link: "/usa"
  },
  {
    subtitle: "The rise of intelligent automation across industries.",
    title: "Research Report",
    description: "Automation powered by AI and cloud is reshaping how businesses innovate and scale.",
    image: "https://img.freepik.com/premium-photo/woman-is-walking-front-orange-light-purple-walls_674594-12542.jpg",
    link: "/uk"
  },
  {
     subtitle: "Reinventing finance in the digital era.",
    title: "Research Report",
    description: "Explore how AI, blockchain, and data are transforming the finance function for resilience and growth.",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/Gland-and-Skim-300x212:rad-card-half?fit=constrain&ts=1748917304083",
    link: "/germany"
  },
  {
    subtitle: "Sustainability and competitiveness go hand in hand.",
    title: "Research Report",
    description: "Organizations leading in sustainability are proving that purpose and profitability can grow together.",
    image: "https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--1487ca38-19b9-4e5d-b08d-5c1a90a7c58b/ey-female-hand-interacting-with-chatbot-technology-on-a-digital-screen.jpg?quality=85&preferwebp=true",
    link: "/canada"
  },
  
];

const AerospaceSlider = () => {
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

export default AerospaceSlider;
 