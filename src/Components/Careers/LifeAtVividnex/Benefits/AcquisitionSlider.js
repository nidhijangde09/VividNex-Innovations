import React, { useState } from "react";
import "./AcquisitionSlider.css";

const slides = [
  {
    logo: "/images/anser-logo.png",
    title: "Anser Advisory",
    description:
      "Specializing in capital program advisory and consulting services, as well as project and construction management, across transportation, energy, state/local government, water/sewer.",
    link: "#",
  },
  {
    logo: "/images/comtech-logo.png",
    title: "Comtech",
    description:
      "Specializing in capital program management, construction management, project digitization, facility and manufacturing engineering, and process control automation.",
    link: "#",
  },
   {
    logo: "/images/comtech-logo.png",
    title: "Comtech",
    description:
      "Specializing in capital program management, construction management, project digitization, facility and manufacturing engineering, and process control automation.",
    link: "#",
  },
   {
    logo: "/images/comtech-logo.png",
    title: "Comtech",
    description:
      "Specializing in capital program management, construction management, project digitization, facility and manufacturing engineering, and process control automation.",
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
