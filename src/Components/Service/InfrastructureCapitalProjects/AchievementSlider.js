
import React, { useState } from "react";
import "./AchievementSlider.css";

const slides = [
  {
    image: "https://cdn-icons-png.flaticon.com/128/17343/17343072.png",
    title: "Smart Operations",
    description: "Leverage automation and AI-driven workflows to optimize everyday business processes.",

  },
  {
    image: "/images/stakeholder.png",
    title: "Operational Excellence",
    description: "Implement intelligent workflows and automation to drive consistent efficiency across operations.",

  },
  {
    image: "/images/carbon.png",
    title: "Operational Efficiency",
    description: "Harness automation and smart workflows to streamline daily operations.",
  },
  {
    image: "/images/stakeholder.png",
    title: "Efficiency in Action",
    description: "Leverage automated processes and intelligent workflows to improve day-to-day operations.",


  },
  {
    image: "/images/cost.png",
    title: "Optimize Operations",
    description: "Use intelligent workflows and automation to maximize operational efficiency.",

  },
  {
    image: "/images/efficiency.png",
    title: "Operational Efficiency",
    description: "Harness automation and smart workflows to streamline daily operations.",

  },
];

const AchievementSlider = () => {
  const [index, setIndex] = useState(0);
  const visibleCards = 3;

  const handleNext = () => {
    if (index < slides.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="achievement-section">
      
      <div className="slider-wrapper">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * (100 / visibleCards)}%)` }}
        >
          {slides.map((slide, i) => (
            <div className="slider-card" key={i}>
              <div className="slider-icon">
                <img src={slide.image} alt={slide.title} />
              </div>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="slider-controls">
        <button onClick={handlePrev} disabled={index === 0}>
          ←
        </button>
        <button
          onClick={handleNext}
          disabled={index >= slides.length - visibleCards}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default AchievementSlider;
