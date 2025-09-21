import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CapitalSlider.css";

const cardData = [
   {
  subtitle: "Lead the future by thinking smarter and building bolder.",
  title: "The Generative AI Advantage",
  description: "Generative AI is reshaping competitive landscapes. Industry leaders are already taking action—are you ready to join them?",
   image: "https://img.freepik.com/premium-photo/blue-butterfly-purple-flower_1254813-81868.jpg",
    link: "/colombia"
},
{
  subtitle: "Smart supply chains: Are you ready to evolve?",
  title: "The Rise of Intelligent Supply Networks",
  description: "Outdated efficiency models won’t cut it. Modern supply chains must be intelligent, adaptable, and resilient to thrive.",
  image: "https://img.freepik.com/premium-photo/woman-is-walking-front-orange-light-purple-walls_674594-12542.jpg",
    link: "/japan"
},
{
  subtitle: "Human, AI, and robotics: Creating tomorrow’s workplace today.",
  title: "The Future of Work Is Hybrid Intelligence",
  description: "Vividnex partners with Wharton to explore how blending human skills with AI and robotics drives business innovation.",
    image: "https://dynamicmedia.accenture.com/is/image/accenture/Gland-and-Skim-300x212:rad-card-half?fit=constrain&ts=1748917304083",
    link: "/france"
},
{
  subtitle: "AI and brands: Redefining consumer connections.",
  title: "Reimagining Consumer Engagement with AI",
  description: "From assistant to advisor, AI is deepening human-brand relationships that will shape future market leaders.",
  image: "https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--1487ca38-19b9-4e5d-b08d-5c1a90a7c58b/ey-female-hand-interacting-with-chatbot-technology-on-a-digital-screen.jpg?quality=85&preferwebp=true",
    link: "/india"
},
{
  subtitle: "Cyber defense strategies for a dynamic future.",
  title: "Next-Gen Cybersecurity: Defend, Adapt, Evolve",
  description: "Stay ahead with advanced cyber defense methods designed for the challenges of 2025 and beyond.",
  image: "https://img.freepik.com/premium-photo/blue-butterfly-purple-flower_1254813-81868.jpg",
    link: "/usa"
},
{
  subtitle: "AI’s transformative role in healthcare innovation.",
  title: "Healthcare Reimagined Through AI",
  description: "Discover how AI is revolutionizing diagnostics, treatment, and patient care experiences across the industry.",
   image: "https://img.freepik.com/premium-photo/woman-is-walking-front-orange-light-purple-walls_674594-12542.jpg",
    link: "/uk"
},
{
  subtitle: "Driving sustainability with AI-powered solutions.",
  title: "Sustainable AI: Innovation for a Greener Future",
  description: "Developing AI technologies that accelerate environmental and social goals across diverse industries.",
   image: "https://dynamicmedia.accenture.com/is/image/accenture/Gland-and-Skim-300x212:rad-card-half?fit=constrain&ts=1748917304083",
    link: "/germany"
},
{
  subtitle: "Harnessing data for enterprise growth and leadership.",
  title: "Data-Driven Growth in the AI Economy",
  description: "Top companies leverage data-driven strategies to fuel decisions, growth, and maintain competitive advantage.",
      image: "https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--1487ca38-19b9-4e5d-b08d-5c1a90a7c58b/ey-female-hand-interacting-with-chatbot-technology-on-a-digital-screen.jpg?quality=85&preferwebp=true",
    link: "/canada"
}

];

const CapitalSlider = () => {
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

export default CapitalSlider ;
 