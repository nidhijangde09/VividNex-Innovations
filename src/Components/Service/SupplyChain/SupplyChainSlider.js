import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SupplyChainSlider.css";

const cardData = [
  {
    subtitle: "Shaping tomorrow with AI-driven innovation",
    title: "Research Report",
    description: "Generative AI is redefining competitive advantage. Forward-thinking organizations are taking action today.",
    image: "https://img.freepik.com/premium-photo/blue-butterfly-purple-flower_1254813-81868.jpg",
    link: "/colombia"
  },
  {
    subtitle: "Keep pace with next-generation supply chains",
    title: "Intelligent Supply Chain Report",
    description: "Supply chains today must be smart, responsive, and resilient to meet the demands of a dynamic business environment.",
    image: "https://img.freepik.com/premium-photo/woman-is-walking-front-orange-light-purple-walls_674594-12542.jpg",
    link: "/japan"
  },
  {
    subtitle: "Transforming the workplace through synergy between humans, AI, and robotics.",
    title: "Research Report",
    description: "VividNex is collaborating with Wharton to research how human strengths can integrate with AI and robotics for business innovation.",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/Gland-and-Skim-300x212:rad-card-half?fit=constrain&ts=1748917304083",
    link: "/france"
  },
  {
   subtitle: "Transforming consumer engagement with AI",
   title: "AI & Consumer Insights Report",
   description: "AI is shifting from assistant to advisor, creating meaningful, human-focused connections that define market leaders.",
   image: "https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--1487ca38-19b9-4e5d-b08d-5c1a90a7c58b/ey-female-hand-interacting-with-chatbot-technology-on-a-digital-screen.jpg?quality=85&preferwebp=true",
    link: "/india"
  },
  {
    subtitle: "Protect your enterprise in an evolving cyber landscape",
    title: "Cybersecurity Insights 2025",
    description: "Leverage advanced defense strategies to safeguard your organization today and tomorrow.",
    image: "https://img.freepik.com/premium-photo/blue-butterfly-purple-flower_1254813-81868.jpg",
    link: "/usa"
  },
  {
   subtitle: "Advancing healthcare with AI",
   title: "Research Report",
   description: "Learn how AI is driving smarter diagnostics, personalized treatment, and improved patient care.",
    image: "https://img.freepik.com/premium-photo/woman-is-walking-front-orange-light-purple-walls_674594-12542.jpg",
    link: "/uk"
  },
  {
    subtitle: "Driving sustainability with AI innovation",
    title: "Sustainable AI Insights",
    description: "Explore how AI solutions can help organizations achieve sustainability targets and transform operations responsibly.",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/Gland-and-Skim-300x212:rad-card-half?fit=constrain&ts=1748917304083",
    link: "/germany"
  },
  {
    subtitle: "Unlock growth with data",
    title: "Data-Driven Insights Report",
    description: "Leading enterprises harness data to inform decisions, fuel growth, and maintain a competitive edge.",
    image: "https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--1487ca38-19b9-4e5d-b08d-5c1a90a7c58b/ey-female-hand-interacting-with-chatbot-technology-on-a-digital-screen.jpg?quality=85&preferwebp=true",
    link: "/canada"
  },
];

const SupplyChainSlider = () => {
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

export default SupplyChainSlider;
