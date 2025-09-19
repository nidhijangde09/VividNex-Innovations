import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TechnologyTransformationSlider.css";

const cardData = [
  {
    subtitle: "Lead the future by thinking smarter and building bolder.",
title: "Generative AI Leadership Report",
description: "Generative AI is transforming competition. Leaders are taking action today—are you ready to join them?",

    image: "https://img.freepik.com/premium-photo/blue-butterfly-purple-flower_1254813-81868.jpg",
    link: "/colombia"
  },
  {
    subtitle: "Smarter, faster, and resilient: The supply chains of tomorrow.",
    title: "Supply Chain Strategy Brief",
    description: "Modern supply chains go beyond efficiency—they must think, adapt, and grow in an unpredictable world.",
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
    subtitle: "AI, Identity, and Engagement: Shaping Tomorrow’s Consumer Experience",
    title: "AI & Consumer Insights",
    description: "AI is evolving from assistant to trusted advisor. Strong, human-centered connections between people, brands, and AI will define market leaders.",
    image: "https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--1487ca38-19b9-4e5d-b08d-5c1a90a7c58b/ey-female-hand-interacting-with-chatbot-technology-on-a-digital-screen.jpg?quality=85&preferwebp=true",
    link: "/india"
  },
  {
   subtitle: "Building cyber resilience for the years ahead",
    title: "Future of Cyber Defense",
    description: "Leverage advanced cybersecurity strategies to safeguard your organization and ensure long-term operational resilience.",
    image: "https://img.freepik.com/premium-photo/blue-butterfly-purple-flower_1254813-81868.jpg",
    link: "/usa"
  },
  {
    subtitle: "Transforming care through intelligent innovation.",
    title: "Next-Gen Healthcare AI Report",
    description: "AI is reshaping how healthcare is delivered—from diagnosis to treatment—enabling better outcomes and personalized care.",
    image: "https://img.freepik.com/premium-photo/woman-is-walking-front-orange-light-purple-walls_674594-12542.jpg",
    link: "/uk"
  },
  {
    subtitle: "AI for a greener, smarter future.",
    title: "AI & Sustainability Insights",
    description: "Empowering organizations to achieve sustainability targets while unlocking new opportunities with AI.",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/Gland-and-Skim-300x212:rad-card-half?fit=constrain&ts=1748917304083",
    link: "/germany"
  },
  {
    subtitle: "Data at the heart of business growth.",
    title: "Data-Driven Growth Insights",
    description: "Top companies leverage data to inform decisions, accelerate growth, and secure market leadership.",
    image: "https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--1487ca38-19b9-4e5d-b08d-5c1a90a7c58b/ey-female-hand-interacting-with-chatbot-technology-on-a-digital-screen.jpg?quality=85&preferwebp=true",
    link: "/canada"
  },
];

const TechnologyTransformationSlider = () => {
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

export default TechnologyTransformationSlider;
