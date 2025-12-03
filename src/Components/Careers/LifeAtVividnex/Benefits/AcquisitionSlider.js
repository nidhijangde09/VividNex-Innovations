import React, { useState } from "react";
import "./AcquisitionSlider.css";

const slides = [
  {
    logo: "https://cdn-icons-png.flaticon.com/128/17248/17248469.png",
   title: "Paid Time Off",
   description: "You’ll receive annual Paid Time Off (PTO) in accordance with the state you work in. PTO encompasses earned leave, sick leave, and casual leave."
,
    link: "https://example.com/anser",
  },
  {
    logo: "https://dynamicmedia.accenture.com/is/content/accenture/Client_80x80-1?ts=1741760964920&fit=constrain&dpr=off",
    title: "Public Holidays",
    description: "Employees are eligible for ten public holidays annually, consisting of eight fixed and two floating holidays.",
    link: "https://example.com/comtech",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    title: "Vividnex Comtech",
    description: "Providing advanced solutions in capital program management, construction, project digitization, and engineering across facilities and manufacturing.",
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
