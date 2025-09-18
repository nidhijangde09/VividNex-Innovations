import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LearningSlider.css";

const cardData = [
  {
    subtitle: "Lead the future. Think smarter. Build bolder.",
title: "Generative AI Research",
description: "Generative AI is transforming industries. Forward-thinking leaders are acting now. Are you ready to join them?",

    image: "https://img.freepik.com/premium-photo/blue-butterfly-purple-flower_1254813-81868.jpg",
    link: "/colombia"
  },
  {
    subtitle: "Innovate boldly. Lead strategically.",
title: "AI & Innovation Insights",
description: "Generative AI is rewriting competition rules. Leaders are already taking action. Where do you stand?",
 image: "https://img.freepik.com/premium-photo/woman-is-walking-front-orange-light-purple-walls_674594-12542.jpg",
    link: "/japan"
  },
  {
   subtitle: "Smarter thinking. Bolder action. Future-ready leadership.",
title: "Strategic AI Report",
description: "Generative AI is reshaping markets. The frontrunners are moving fast. Will you keep up?",
 image: "https://dynamicmedia.accenture.com/is/image/accenture/Gland-and-Skim-300x212:rad-card-half?fit=constrain&ts=1748917304083",
    link: "/france"
  },
  {
    subtitle: "Think smarter. Act bolder. Shape the future.",
title: "AI Industry Insights",
description: "Generative AI is redefining competition. Leaders are seizing opportunities today. Are you ready?",
image: "https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--1487ca38-19b9-4e5d-b08d-5c1a90a7c58b/ey-female-hand-interacting-with-chatbot-technology-on-a-digital-screen.jpg?quality=85&preferwebp=true",
    link: "/india"
  },
  {
    subtitle: "Bold action. Smart insights. Future-ready decisions.",
title: "Generative AI Insights",
description: "Generative AI is changing the game. Leaders are already moving. Are you one of them?",
image: "https://img.freepik.com/premium-photo/blue-butterfly-purple-flower_1254813-81868.jpg",
    link: "/usa"
  },
  {
    subtitle: "Lead boldly. Innovate smarter.",
title: "Generative AI Strategic Report",
description: "Generative AI is reshaping industries. Leaders are already taking decisive action. Are you prepared to lead?",
 image: "https://img.freepik.com/premium-photo/woman-is-walking-front-orange-light-purple-walls_674594-12542.jpg",
    link: "/uk"
  },
  {
    subtitle: "Smarter insights. Bolder moves.",
title: "AI Research & Insights",
description: "Generative AI is transforming competition. Forward-thinking organizations are moving fast. How will you respond?",
 image: "https://dynamicmedia.accenture.com/is/image/accenture/Gland-and-Skim-300x212:rad-card-half?fit=constrain&ts=1748917304083",
    link: "/germany"
  },
  {
 subtitle: "Shape tomorrow with smarter strategies.",
title: "Generative AI Industry Report",
description: "Generative AI is rewriting the rules. The leaders are acting now. Will you keep pace?",
 image: "https://www.ey.com/adobe/dynamicmedia/deliver/dm-aid--1487ca38-19b9-4e5d-b08d-5c1a90a7c58b/ey-female-hand-interacting-with-chatbot-technology-on-a-digital-screen.jpg?quality=85&preferwebp=true",
    link: "/canada"
  },
];

const LearningSlider = () => {
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

export default LearningSlider;
