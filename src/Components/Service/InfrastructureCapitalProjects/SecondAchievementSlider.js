
import React, { useState } from "react";
import "./SecondAchievementSlider.css";

const slides = [
  {
    image: "https://cdn-icons-png.flaticon.com/128/17343/17343072.png",
    title: "Operational Agility",
description: "Drive faster, more efficient operations by combining automation with intelligent workflows.",
 },
  {
    image: "/images/stakeholder.png",
   title: "Workflow Intelligence",
description: "Harness automated workflows and smart tools to improve operational efficiency and productivity.",
 },
  {
    image: "/images/carbon.png",
   title: "Efficiency Unlocked",
description: "Optimize day-to-day operations with automation and intelligent process management.",

  },
  {
    image: "/images/stakeholder.png",
    title: "Stakeholder alignment",
   title: "Automated Operations",
description: "Enhance operational performance using intelligent workflows and automation solutions.",
 },
  {
    image: "/images/cost.png",
   title: "Operational Streamlining",
description: "Combine automation and smart workflows to simplify and optimize business processes.",

  },
  {
    image: "/images/efficiency.png",
    title: "Operational efficiency",
   title: "Next-Gen Efficiency",
description: "Transform operations with AI-driven automation and intelligent workflow solutions.",

  },
];

const SecondAchievementSlider = () => {
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

export default SecondAchievementSlider;
