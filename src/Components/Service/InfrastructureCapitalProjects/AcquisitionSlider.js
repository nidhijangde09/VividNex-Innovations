import React, { useState } from "react";
import "./AcquisitionSlider.css";

const slides = [
  {
    logo: "/images/anser-logo.png",
    title: "Horizon Advisory",
    description: "Providing expert advisory and consulting services in capital programs, project and construction management across transportation, energy, government, and water/sewer sectors.",
 link: "#",
  },
  {
    logo: "/images/comtech-logo.png",
    title: "Summit Advisory",
    description: "Specialists in capital program consulting and project management, serving transportation, energy, local/state government, and water/sewer industries.",
   link: "#",
  },
   {
    logo: "/images/comtech-logo.png",
    title: "Vertex Advisory",
    description: "Offering capital program advisory, consulting, and project/construction management services across transportation, energy, government, and water/sewer sectors.",
  link: "#",
  },
   {
    logo: "/images/comtech-logo.png",
    title: "Pinnacle Advisory",
    description: "Delivering advisory and consulting expertise in capital programs, project management, and construction management for transportation, energy, government, and water/sewer projects.",
    link: "#",
  },
  // Add more acquisitions if needed
];

const AcquisitionSlider = () => {
  const [index, setIndex] = useState(0);
  const visibleSlides = 2;

  const handleNext = () => {
    if (index < slides.length - visibleSlides) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="acquisition-slider">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${index * (100 / visibleSlides)}%)` }}
      >
        {slides.map((slide, i) => (
          <div className="slider-card" key={i}>
            <img src={slide.logo} alt={slide.title} className="logo" />
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
            <a href={slide.link} className="learn-more">
              Learn more →
            </a>
          </div>
        ))}
      </div>

      <div className="slider-controls">
        <button onClick={handlePrev} disabled={index === 0}>
          ←
        </button>
        <button
          onClick={handleNext}
          disabled={index >= slides.length - visibleSlides}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default AcquisitionSlider;
