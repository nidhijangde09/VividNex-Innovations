import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BankingSlider.css";

const cardData = [
  {
    
  subtitle: "Ready to lead tomorrow? Think smarter. Build bolder with Vividnex.",
  title: "Vividnex Research Report",
  description: "Generative AI is transforming competition across industries. Vividnex leaders act now to unlock its full potential. Will you?",
    image: "https://img.freepik.com/premium-photo/blue-butterfly-purple-flower_1254813-81868.jpg",
    link: "/colombia"
  },
  {
    subtitle: "Supply chains are getting smarter. Is your organization ready to keep pace?",
  title: "The Future of Supply Chain Intelligence",
  description: "Traditional efficiency won’t cut it anymore. Today’s supply chains must be intelligent, agile, and resilient to stay ahead.",
    image: "https://img.freepik.com/premium-photo/woman-is-walking-front-orange-light-purple-walls_674594-12542.jpg",
    link: "/japan"
  },
  
    {
  subtitle: "Transforming the workplace through synergy between humans, AI, and robotics.",
  title: "The Future of Work: Human-AI-Robotics Collaboration",
  description: "Vividnex and Wharton are partnering to explore how blending human strengths with AI and robotics drives breakthrough business innovation.",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/Gland-and-Skim-300x212:rad-card-half?fit=constrain&ts=1748917304083",
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
  subtitle: "Cyber defense strategies for 2025 and beyond.",
  title: "Next-Generation Cybersecurity: Strategies for 2025 and Beyond",
  description: "Vividnex equips organizations to future-proof their defenses with cutting-edge cyber strategies and advanced threat protection.",
    image: "https://img.freepik.com/premium-photo/blue-butterfly-purple-flower_1254813-81868.jpg",
    link: "/usa"
  },
  {
  subtitle: "The next era of AI in healthcare innovation.",
  title: "AI-Driven Healthcare: Transforming Diagnostics and Patient Care",
  description: "Vividnex explores how AI is revolutionizing diagnostics, treatment, and patient experiences to redefine healthcare outcomes.",
    image: "https://img.freepik.com/premium-photo/woman-is-walking-front-orange-light-purple-walls_674594-12542.jpg",
    link: "/uk"
  },
  {
    subtitle: "Empowering industries through sustainable AI solutions.",
  title: "Sustainable AI: Driving Industry-wide Impact",
  description: "Vividnex develops AI innovations that accelerate sustainability goals and create lasting value across industries.",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/Gland-and-Skim-300x212:rad-card-half?fit=constrain&ts=1748917304083",
    link: "/germany"
  },
  {
    subtitle: "Data-driven growth strategies for modern enterprises.",
  title: "Harnessing Data for Competitive Growth",
  description: "Vividnex highlights how leading companies leverage data to fuel decisions, accelerate growth, and secure market leadership.",
    image: "https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--1487ca38-19b9-4e5d-b08d-5c1a90a7c58b/ey-female-hand-interacting-with-chatbot-technology-on-a-digital-screen.jpg?quality=85&preferwebp=true",
    link: "/canada"
  },
];

const BankingSlider = () => {
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

export default BankingSlider ;
 