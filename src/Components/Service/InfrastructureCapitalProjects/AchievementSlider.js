
import React, { useState } from "react";
import "./AchievementSlider.css";

const slides = [
  {
    image: "https://cdn-icons-png.flaticon.com/128/17343/17343072.png",
    title: "Decreased carbon",
    description:
      "Achieve your goals for sustainability and GHG emissions by using technology to embed sustainability in your strategy.",
  },
  {
    image: "/images/stakeholder.png",
    title: "Stakeholder alignment",
    description:
      "Alignment with internal and external stakeholders, from large organizations or municipalities to communities, can reduce risks that can impact project schedule and budget.",
  },
  {
    image: "/images/carbon.png",
    title: "Decreased carbon",
    description:
      "Achieve your goals for sustainability and GHG emissions by using technology to embed sustainability in your strategy.",
  },
  {
    image: "/images/stakeholder.png",
    title: "Stakeholder alignment",
    description:
      "Alignment with internal and external stakeholders, from large organizations or municipalities to communities, can reduce risks that can impact project schedule and budget.",
  },
  {
    image: "/images/cost.png",
    title: "Cost optimization",
    description:
      "Knowledge and visibility of cost drivers improve financial planning and budgeting.",
  },
  {
    image: "/images/efficiency.png",
    title: "Operational efficiency",
    description:
      "Leverage automation and intelligent workflows to optimize daily operations.",
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
