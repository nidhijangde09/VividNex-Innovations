import React, { useState } from "react";
import "./AcquisitionSlider.css";

const slides = [
  {
    logo: "https://cdn-icons-png.flaticon.com/128/17248/17248469.png",
    title: "Anser Advisory",
    description:
      "Specializing in capital program advisory and consulting services, as well as project and construction management, across transportation, energy, state/local government, water/sewer.",
    link: "https://example.com/anser",
  },
  {
    logo: "https://dynamicmedia.accenture.com/is/content/accenture/Client_80x80-1?ts=1741760964920&fit=constrain&dpr=off",
    title: "Comtech",
    description:
      "Specializing in capital program management, construction management, project digitization, facility and manufacturing engineering, and process control automation.",
    link: "https://example.com/comtech",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    title: "Comtech",
    description:
      "Specializing in capital program management, construction management, project digitization, facility and manufacturing engineering, and process control automation.",
    link: "https://example.com/comtech2",
  },
 
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
            {/* ✅ Direct image as clickable link */}
            <a href={slide.link} target="_blank" rel="noopener noreferrer">
              <img src={slide.logo} alt={slide.title} className="logo" />
            </a>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
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
